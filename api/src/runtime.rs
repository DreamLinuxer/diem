// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

use crate::{context::Context, index};

use anyhow::{bail, format_err, Result};
use diem_config::config::{ApiConfig, JsonRpcConfig, NodeConfig};
use diem_mempool::MempoolClientSender;
use diem_types::{chain_id::ChainId, protocol_spec::DpnProto};
use futures::join;
use storage_interface::MoveDbReader;
use warp::{Filter, Reply};

use std::{convert::Infallible, net::SocketAddr, sync::Arc};
use tokio::runtime::{Builder, Runtime};

/// Creates HTTP server (warp-based) serves for both REST and JSON-RPC API.
/// When api and json-rpc are configured with same port, both API will be served for the port.
/// When api and json-rpc are configured with different port, both API will be served for
/// both ports.
/// Returns corresponding Tokio runtime
pub fn bootstrap(
    config: &NodeConfig,
    chain_id: ChainId,
    db: Arc<dyn MoveDbReader<DpnProto>>,
    mp_sender: MempoolClientSender,
) -> anyhow::Result<Runtime> {
    let runtime = Builder::new_multi_thread()
        .thread_name("api")
        .enable_all()
        .build()
        .expect("[api] failed to create runtime");

    let role = config.base.role;
    let json_rpc_config = config.json_rpc.clone();
    let api_config = config.api.clone();
    let mut api = WebServer::from(api_config.clone());
    let jsonrpc = WebServer::from(json_rpc_config.clone());
    if api.port() == jsonrpc.port() {
        api.merge(&jsonrpc).map_err(|e| format_err!("api and json_rpc are configured using same port with different ip or tls configurations, please configure them same. {}", e))?;
    }
    runtime.spawn(async move {
        let context = Context::new(chain_id, db, mp_sender, role, json_rpc_config, api_config);
        let routes = index::routes(context);
        if api.port() == jsonrpc.port() {
            api.serve(routes).await;
        } else {
            join!(api.serve(routes.clone()), jsonrpc.serve(routes));
        }
    });
    Ok(runtime)
}

#[derive(Clone, Debug, PartialEq)]
pub(crate) struct WebServer {
    pub address: SocketAddr,
    pub tls_cert_path: Option<String>,
    pub tls_key_path: Option<String>,
}

impl From<ApiConfig> for WebServer {
    fn from(cfg: ApiConfig) -> Self {
        Self::new(cfg.address, cfg.tls_cert_path, cfg.tls_key_path)
    }
}

impl From<JsonRpcConfig> for WebServer {
    fn from(cfg: JsonRpcConfig) -> Self {
        Self::new(cfg.address, cfg.tls_cert_path, cfg.tls_key_path)
    }
}

impl WebServer {
    pub fn new(
        address: SocketAddr,
        tls_cert_path: Option<String>,
        tls_key_path: Option<String>,
    ) -> Self {
        Self {
            address,
            tls_cert_path,
            tls_key_path,
        }
    }

    pub fn port(&self) -> u16 {
        self.address.port()
    }

    pub fn ip(&self) -> String {
        self.address.ip().to_string()
    }

    pub fn merge(&mut self, other: &WebServer) -> Result<()> {
        if self.port() != other.port() {
            bail!("can't merge web server configurations that have different ports");
        }
        if self.address.is_ipv6() || other.address.is_ipv6() {
            bail!("can't merge web server configurations that is IPv6");
        }
        if self.ip() != other.ip() {
            if other.ip() == "0.0.0.0" {
                self.address.set_ip(other.address.ip())
            } else if self.ip() != "0.0.0.0" {
                bail!(
                    "can't merge web server address IPs: {} {}",
                    self.ip(),
                    other.ip()
                );
            }
        }
        if self.tls_cert_path.is_none() {
            self.tls_cert_path = other.tls_cert_path.clone();
            self.tls_key_path = other.tls_key_path.clone();
        }
        Ok(())
    }

    pub async fn serve<F>(&self, routes: F)
    where
        F: Filter<Error = Infallible> + Clone + Sync + Send + 'static,
        F::Extract: Reply,
    {
        match &self.tls_cert_path {
            None => warp::serve(routes).bind(self.address).await,
            Some(cert_path) => {
                warp::serve(routes)
                    .tls()
                    .cert_path(cert_path)
                    .key_path(self.tls_key_path.as_ref().unwrap())
                    .bind(self.address)
                    .await
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use std::time::Duration;

    use diem_config::config::NodeConfig;
    use diem_types::chain_id::ChainId;
    use serde_json::json;

    use crate::{
        runtime::bootstrap,
        tests::{new_test_context, TestContext},
    };

    use super::WebServer;

    #[test]
    fn test_bootstrap_failed_if_jsonprc_and_api_configured_same_port_and_different_host() {
        let runtime = tokio::runtime::Runtime::new().unwrap();
        let context = runtime.block_on(new_test_context_async());
        let mut cfg = NodeConfig::default();
        cfg.randomize_ports();
        // same port but different host
        cfg.api.address = format!("10.10.10.10:{}", cfg.json_rpc.address.port())
            .parse()
            .unwrap();
        let ret = bootstrap(
            &cfg,
            ChainId::test(),
            context.db.clone(),
            context.mempool.ac_client.clone(),
        );
        assert!(ret.is_err());
    }

    #[test]
    fn test_bootstrap_jsonprc_and_api_configured_same_port() {
        let runtime = tokio::runtime::Runtime::new().unwrap();
        let context = runtime.block_on(new_test_context_async());
        let mut cfg = NodeConfig::default();
        cfg.randomize_ports();
        // same port and host
        cfg.api.address = cfg.json_rpc.address;
        let ret = bootstrap(
            &cfg,
            ChainId::test(),
            context.db.clone(),
            context.mempool.ac_client.clone(),
        );
        assert!(ret.is_ok());
        assert_web_server(cfg.api.address.port());
    }

    #[test]
    fn test_bootstrap_jsonprc_and_api_configured_at_different_port() {
        let runtime = tokio::runtime::Runtime::new().unwrap();
        let context = runtime.block_on(new_test_context_async());
        let mut cfg = NodeConfig::default();
        // different ports should be generated
        cfg.randomize_ports();
        let ret = bootstrap(
            &cfg,
            ChainId::test(),
            context.db.clone(),
            context.mempool.ac_client.clone(),
        );
        assert!(ret.is_ok());

        assert_web_server(cfg.api.address.port());
        assert_web_server(cfg.json_rpc.address.port());
    }

    #[test]
    fn test_merge_web_server() {
        let ws1 = WebServer::new("127.0.0.1:8080".parse().unwrap(), None, None);
        let ws2 = WebServer::new("[::0]:8080".parse().unwrap(), None, None);
        let ws3 = WebServer::new("[2001:db8::1]:8080".parse().unwrap(), None, None);
        let ws4 = WebServer::new("0.0.0.0:8080".parse().unwrap(), None, None);
        let ws5 = WebServer::new("10.10.0.1:8080".parse().unwrap(), None, None);
        let ws6 = WebServer::new("0.0.0.0:80".parse().unwrap(), None, None);
        let ws7 = WebServer::new(
            "0.0.0.0:8080".parse().unwrap(),
            Some("/cert_path".to_owned()),
            Some("/key_path".to_owned()),
        );

        // can't merge ipv6
        assert!(ws1.clone().merge(&ws2).is_err());
        assert!(ws1.clone().merge(&ws3).is_err());
        assert!(ws2.clone().merge(&ws1).is_err());
        assert!(ws3.clone().merge(&ws4).is_err());
        assert!(ws4.clone().merge(&ws2).is_err());
        assert!(ws4.clone().merge(&ws3).is_err());

        // can't merge diff ips
        assert!(ws1.clone().merge(&ws5).is_err());
        assert!(ws5.clone().merge(&ws1).is_err());

        // can't merge diff ports
        assert!(ws4.clone().merge(&ws6).is_err());
        assert!(ws6.clone().merge(&ws1).is_err());
        assert!(ws6.clone().merge(&ws7).is_err());
        assert!(ws1.clone().merge(&ws6).is_err());

        fn assert_merged(mut ws: WebServer, other: &WebServer, address: &str) {
            ws.merge(other).expect("merged");
            assert_eq!(ws.address.to_string(), address);
            assert_eq!(ws.tls_cert_path, other.tls_cert_path);
            assert_eq!(ws.tls_key_path, other.tls_key_path);
        }
        assert_merged(ws1.clone(), &ws1, "127.0.0.1:8080");
        assert_merged(ws1.clone(), &ws4, "0.0.0.0:8080");
        assert_merged(ws4.clone(), &ws1, "0.0.0.0:8080");
        assert_merged(ws4.clone(), &ws5, "0.0.0.0:8080");
        assert_merged(ws5, &ws4, "0.0.0.0:8080");

        // merge tls cert and key paths
        assert_merged(ws1, &ws7, "0.0.0.0:8080");
        assert_merged(ws4, &ws7, "0.0.0.0:8080");
    }

    pub fn assert_web_server(port: u16) {
        let base_url = format!("http://localhost:{}", port);
        let client = reqwest::blocking::Client::new();
        // first call have retry to ensure the server is ready to serve
        let api_resp = with_retry(|| Ok(client.get(&base_url).send()?)).unwrap();
        assert_eq!(api_resp.status(), 200);
        let healthy_check_resp = client
            .get(format!("{}/-/healthy", base_url))
            .send()
            .unwrap();
        assert_eq!(healthy_check_resp.status(), 200);
        let jsonrpc_resp = client
            .post(&base_url)
            .json(&json!({"jsonrpc": "2.0", "method": "get_metadata", "id": 1}))
            .send()
            .unwrap();
        assert_eq!(jsonrpc_resp.status(), 200);
    }

    fn with_retry<F>(f: F) -> anyhow::Result<reqwest::blocking::Response>
    where
        F: Fn() -> anyhow::Result<reqwest::blocking::Response>,
    {
        let mut remaining_attempts = 60;
        loop {
            match f() {
                Ok(r) => return Ok(r),
                Err(_) if remaining_attempts > 0 => {
                    remaining_attempts -= 1;
                    std::thread::sleep(Duration::from_millis(100));
                }
                Err(error) => return Err(error),
            }
        }
    }

    pub async fn new_test_context_async() -> TestContext {
        new_test_context()
    }
}
