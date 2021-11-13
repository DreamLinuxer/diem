var N = null;var sourcesIndex = {};
sourcesIndex["abigen"] = {"name":"","files":["abigen.rs","lib.rs"]};
sourcesIndex["accumulator"] = {"name":"","files":["lib.rs","test_helpers.rs"]};
sourcesIndex["backup_cli"] = {"name":"","dirs":[{"name":"backup_types","dirs":[{"name":"epoch_ending","files":["backup.rs","manifest.rs","mod.rs","restore.rs"]},{"name":"state_snapshot","files":["backup.rs","manifest.rs","mod.rs","restore.rs"]},{"name":"transaction","files":["backup.rs","manifest.rs","mod.rs","restore.rs"]}],"files":["mod.rs"]},{"name":"coordinators","files":["backup.rs","mod.rs","replay_verify.rs","restore.rs","verify.rs"]},{"name":"metadata","files":["cache.rs","mod.rs","view.rs"]},{"name":"metrics","files":["backup.rs","metadata.rs","mod.rs","restore.rs","verify.rs"]},{"name":"storage","dirs":[{"name":"command_adapter","files":["command.rs","config.rs","mod.rs"]},{"name":"local_fs","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"utils","dirs":[{"name":"stream","files":["buffered_x.rs","futures_ordered_x.rs","futures_unordered_x.rs","mod.rs"]}],"files":["backup_service_client.rs","error_notes.rs","mod.rs","read_record_bytes.rs","storage_ext.rs"]}],"files":["lib.rs"]};
sourcesIndex["backup_service"] = {"name":"","dirs":[{"name":"handlers","files":["mod.rs","utils.rs"]}],"files":["lib.rs"]};
sourcesIndex["boogie_backend"] = {"name":"","files":["boogie_helpers.rs","boogie_wrapper.rs","bytecode_translator.rs","lib.rs","options.rs","prover_task_runner.rs","spec_translator.rs"]};
sourcesIndex["borrow_graph"] = {"name":"","files":["graph.rs","lib.rs","paths.rs","references.rs","shared.rs"]};
sourcesIndex["bounded_executor"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bytecode"] = {"name":"","files":["access_path.rs","access_path_trie.rs","annotations.rs","borrow_analysis.rs","clean_and_optimize.rs","compositional_analysis.rs","data_invariant_instrumentation.rs","dataflow_analysis.rs","dataflow_domains.rs","debug_instrumentation.rs","eliminate_imm_refs.rs","escape_analysis.rs","function_data_builder.rs","function_target.rs","function_target_pipeline.rs","global_invariant_analysis.rs","global_invariant_instrumentation.rs","global_invariant_instrumentation_v2.rs","graph.rs","inconsistency_check.rs","lib.rs","livevar_analysis.rs","loop_analysis.rs","memory_instrumentation.rs","mono_analysis.rs","mut_ref_instrumentation.rs","mutation_tester.rs","options.rs","packed_types_analysis.rs","pipeline_factory.rs","reaching_def_analysis.rs","read_write_set_analysis.rs","spec_instrumentation.rs","stackless_bytecode.rs","stackless_bytecode_generator.rs","stackless_control_flow_graph.rs","usage_analysis.rs","verification_analysis.rs","verification_analysis_v2.rs","well_formed_instrumentation.rs"]};
sourcesIndex["bytecode_interpreter"] = {"name":"","dirs":[{"name":"concrete","files":["evaluator.rs","local_state.rs","mod.rs","player.rs","runtime.rs","settings.rs","ty.rs","value.rs"]},{"name":"shared","files":["bridge.rs","ident.rs","mod.rs","variant.rs"]}],"files":["lib.rs"]};
sourcesIndex["bytecode_interpreter_crypto"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bytecode_source_map"] = {"name":"","files":["lib.rs","mapping.rs","marking.rs","source_map.rs","utils.rs"]};
sourcesIndex["bytecode_verifier"] = {"name":"","dirs":[{"name":"locals_safety","files":["abstract_state.rs","mod.rs"]},{"name":"reference_safety","files":["abstract_state.rs","mod.rs"]}],"files":["ability_field_requirements.rs","absint.rs","acquires_list_verifier.rs","check_duplication.rs","code_unit_verifier.rs","constants.rs","control_flow.rs","cyclic_dependencies.rs","dependencies.rs","friends.rs","instantiation_loops.rs","instruction_consistency.rs","lib.rs","script_signature.rs","signature.rs","stack_usage_verifier.rs","struct_defs.rs","type_safety.rs","verifier.rs"]};
sourcesIndex["bytecode_verifier_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bytecode_verifier_transactional_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["channel"] = {"name":"","files":["diem_channel.rs","lib.rs","message_queues.rs"]};
sourcesIndex["cli"] = {"name":"","files":["account_commands.rs","client_proxy.rs","commands.rs","counters.rs","dev_commands.rs","diem_client.rs","info_commands.rs","lib.rs","query_commands.rs","transfer_commands.rs"]};
sourcesIndex["cluster_test"] = {"name":"","dirs":[{"name":"cluster_swarm","files":["cluster_swarm_kube.rs","mod.rs"]},{"name":"effects","files":["mod.rs","network_delay.rs","packet_loss.rs","stop_validator.rs"]},{"name":"experiments","files":["accurate_measurment.rs","compatibility_test.rs","cpu_flamegraph.rs","load_test.rs","mod.rs","packet_loss_random_validators.rs","performance_benchmark.rs","performance_benchmark_three_region_simulation.rs","reboot_cluster.rs","reboot_random_validators.rs","reconfiguration_test.rs","recovery_time.rs","state_sync_performance.rs","twin_validator.rs","versioning_test.rs"]},{"name":"health","files":["commit_check.rs","debug_interface_log_tail.rs","fullnode_check.rs","liveness_check.rs","log_tail.rs","mod.rs"]}],"files":["aws.rs","cluster.rs","cluster_builder.rs","genesis_helper.rs","github.rs","instance.rs","lib.rs","prometheus.rs","report.rs","stats.rs","suite.rs"]};
sourcesIndex["compiler"] = {"name":"","files":["lib.rs","util.rs"]};
sourcesIndex["consensus"] = {"name":"","dirs":[{"name":"block_storage","files":["block_store.rs","block_tree.rs","mod.rs","sync_manager.rs","tracing.rs"]},{"name":"consensusdb","dirs":[{"name":"schema","dirs":[{"name":"block","files":["mod.rs"]},{"name":"quorum_certificate","files":["mod.rs"]},{"name":"single_entry","files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]},{"name":"experimental","files":["buffer.rs","buffer_item.rs","buffer_manager.rs","decoupled_execution_utils.rs","errors.rs","execution_phase.rs","hashable.rs","mod.rs","ordering_state_computer.rs","persisting_phase.rs","pipeline_phase.rs","signing_phase.rs"]},{"name":"liveness","files":["leader_reputation.rs","mod.rs","proposal_generator.rs","proposer_election.rs","rotating_proposer_election.rs","round_proposer_election.rs","round_state.rs"]},{"name":"test_utils","files":["mock_state_computer.rs","mock_storage.rs","mock_txn_manager.rs","mod.rs"]},{"name":"util","files":["mock_time_service.rs","mod.rs","time_service.rs"]}],"files":["consensus_provider.rs","counters.rs","epoch_manager.rs","error.rs","lib.rs","logging.rs","metrics_safety_rules.rs","network.rs","network_interface.rs","pending_votes.rs","persistent_liveness_storage.rs","round_manager.rs","round_manager_fuzzing.rs","state_computer.rs","state_replication.rs","txn_manager.rs"]};
sourcesIndex["consensus_notifications"] = {"name":"","files":["lib.rs"]};
sourcesIndex["consensus_types"] = {"name":"","dirs":[{"name":"experimental","files":["commit_decision.rs","commit_vote.rs","mod.rs"]}],"files":["block.rs","block_data.rs","block_retrieval.rs","block_test_utils.rs","common.rs","epoch_retrieval.rs","executed_block.rs","lib.rs","proposal_msg.rs","quorum_cert.rs","safety_data.rs","sync_info.rs","timeout.rs","timeout_2chain.rs","timeout_certificate.rs","vote.rs","vote_data.rs","vote_msg.rs","vote_proposal.rs"]};
sourcesIndex["crash_handler"] = {"name":"","files":["lib.rs"]};
sourcesIndex["data_streaming_service"] = {"name":"","files":["data_notification.rs","data_stream.rs","error.rs","lib.rs","logging.rs","stream_engine.rs","streaming_client.rs","streaming_service.rs"]};
sourcesIndex["debug_interface"] = {"name":"","files":["lib.rs","node_debug_service.rs"]};
sourcesIndex["diem_api"] = {"name":"","files":["accounts.rs","context.rs","events.rs","index.rs","lib.rs","log.rs","metrics.rs","page.rs","param.rs","runtime.rs","transactions.rs"]};
sourcesIndex["diem_api_types"] = {"name":"","files":["address.rs","bytecode.rs","convert.rs","error.rs","event_key.rs","hash.rs","ledger_info.rs","lib.rs","mime_types.rs","move_types.rs","response.rs","transaction.rs"]};
sourcesIndex["diem_assets_proof"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_bitvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_client"] = {"name":"","dirs":[{"name":"stream","files":["mod.rs","streaming_client.rs","websocket_transport.rs"]},{"name":"verifying_client","files":["blocking.rs","client.rs","file_state_store.rs","methods.rs","mod.rs","state_store.rs"]}],"files":["blocking.rs","client.rs","error.rs","faucet.rs","lib.rs","macros.rs","move_deserialize.rs","proxy.rs","request.rs","response.rs","retry.rs","state.rs"]};
sourcesIndex["diem_config"] = {"name":"","dirs":[{"name":"config","files":["api_config.rs","consensus_config.rs","debug_interface_config.rs","error.rs","execution_config.rs","json_rpc_config.rs","key_manager_config.rs","logger_config.rs","mempool_config.rs","mod.rs","network_config.rs","safety_rules_config.rs","secure_backend_config.rs","state_sync_config.rs","storage_config.rs","test_config.rs"]}],"files":["generator.rs","keys.rs","lib.rs","network_id.rs","utils.rs"]};
sourcesIndex["diem_crypto"] = {"name":"","files":["compat.rs","ed25519.rs","error.rs","hash.rs","hkdf.rs","lib.rs","multi_ed25519.rs","noise.rs","test_utils.rs","traits.rs","validatable.rs","x25519.rs"]};
sourcesIndex["diem_crypto_derive"] = {"name":"","files":["hasher.rs","lib.rs","unions.rs"]};
sourcesIndex["diem_data_client"] = {"name":"","dirs":[{"name":"diemnet","files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["diem_documentation_tool"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_e2e_tests_replay"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_events_fetcher"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_faucet"] = {"name":"","files":["lib.rs","mint.rs"]};
sourcesIndex["diem_framework"] = {"name":"","dirs":[{"name":"natives","files":["account.rs","mod.rs","signature.rs"]}],"files":["lib.rs","release.rs"]};
sourcesIndex["diem_framework_releases"] = {"name":"","dirs":[{"name":"legacy","files":["mod.rs","transaction_scripts.rs"]}],"files":["lib.rs"]};
sourcesIndex["diem_fuzzer"] = {"name":"","dirs":[{"name":"fuzz_targets","files":["consensus.rs","executor.rs","json_rpc_service.rs","mempool.rs","move_vm.rs","network.rs","proof.rs","safety_rules.rs","secure_storage_vault.rs","state_sync.rs","storage.rs","transaction.rs","vm.rs"]}],"files":["commands.rs","fuzz_targets.rs","lib.rs"]};
sourcesIndex["diem_genesis_tool"] = {"name":"","files":["builder.rs","command.rs","config_builder.rs","fullnode_builder.rs","genesis.rs","key.rs","layout.rs","lib.rs","move_modules.rs","validator_builder.rs","validator_config.rs","validator_operator.rs","verify.rs","waypoint.rs"]};
sourcesIndex["diem_github_client"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_global_constants"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_id_generator"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_infallible"] = {"name":"","files":["lib.rs","math.rs","mutex.rs","nonzero.rs","rwlock.rs","time.rs"]};
sourcesIndex["diem_jellyfish_merkle"] = {"name":"","dirs":[{"name":"iterator","files":["mod.rs"]},{"name":"node_type","files":["mod.rs"]},{"name":"restore","files":["mod.rs"]},{"name":"tree_cache","files":["mod.rs"]}],"files":["lib.rs","metrics.rs","mock_tree_store.rs","test_helper.rs"]};
sourcesIndex["diem_json_rpc"] = {"name":"","dirs":[{"name":"stream_rpc","dirs":[{"name":"connection","files":["client_connection.rs","manager.rs","mod.rs","util.rs"]},{"name":"transport","files":["mod.rs","util.rs","websocket.rs"]}],"files":["counters.rs","errors.rs","json_rpc.rs","logging.rs","mod.rs","startup.rs","subscription_types.rs","subscriptions.rs"]},{"name":"tests","files":["genesis.rs","mod.rs","utils.rs"]}],"files":["counters.rs","data.rs","fuzzing.rs","lib.rs","methods.rs","runtime.rs","util.rs"]};
sourcesIndex["diem_json_rpc_client"] = {"name":"","files":["broadcast_client.rs","lib.rs"]};
sourcesIndex["diem_json_rpc_types"] = {"name":"","dirs":[{"name":"stream","files":["mod.rs","request.rs","response.rs"]}],"files":["errors.rs","lib.rs","request.rs","response.rs","views.rs"]};
sourcesIndex["diem_key_manager"] = {"name":"","files":["counters.rs","diem_interface.rs","lib.rs","logging.rs"]};
sourcesIndex["diem_keygen"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_log_derive"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_logger"] = {"name":"","files":["counters.rs","diem_logger.rs","event.rs","filter.rs","json_log.rs","kv.rs","lib.rs","logger.rs","macros.rs","metadata.rs","sample.rs","security.rs","struct_log.rs","tracing_adapter.rs"]};
sourcesIndex["diem_management"] = {"name":"","files":["config.rs","error.rs","lib.rs","secure_backend.rs","storage.rs","transaction.rs","validator_config.rs","waypoint.rs"]};
sourcesIndex["diem_mempool"] = {"name":"","dirs":[{"name":"core_mempool","files":["index.rs","mempool.rs","mod.rs","transaction.rs","transaction_store.rs","ttl_cache.rs"]},{"name":"shared_mempool","files":["coordinator.rs","mod.rs","network.rs","runtime.rs","tasks.rs","types.rs"]},{"name":"tests","files":["fuzzing.rs","mocks.rs","mod.rs"]}],"files":["counters.rs","lib.rs","logging.rs"]};
sourcesIndex["diem_metrics"] = {"name":"","files":["json_encoder.rs","json_metrics.rs","lib.rs","metric_server.rs","op_counters.rs","public_metrics.rs"]};
sourcesIndex["diem_metrics_core"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_network_address_encryption"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_node"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_operational_tool"] = {"name":"","files":["account_resource.rs","auto_validate.rs","command.rs","governance.rs","json_rpc.rs","keys.rs","lib.rs","network_checker.rs","owner.rs","print.rs","test_helper.rs","validate_transaction.rs","validator_config.rs","validator_set.rs"]};
sourcesIndex["diem_parallel_executor"] = {"name":"","files":["errors.rs","executor.rs","lib.rs","outcome_array.rs","scheduler.rs","task.rs"]};
sourcesIndex["diem_proptest_helpers"] = {"name":"","files":["growing_subset.rs","lib.rs","repeat_vec.rs","value_generator.rs"]};
sourcesIndex["diem_rate_limiter"] = {"name":"","files":["async_lib.rs","lib.rs","rate_limit.rs"]};
sourcesIndex["diem_resource_viewer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_retrier"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_sdk"] = {"name":"","files":["lib.rs","transaction_builder.rs","types.rs"]};
sourcesIndex["diem_secure_net"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_secure_push_metrics"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_secure_storage"] = {"name":"","files":["crypto_kv_storage.rs","crypto_storage.rs","error.rs","github.rs","in_memory.rs","kv_storage.rs","lib.rs","namespaced.rs","on_disk.rs","policy.rs","storage.rs","vault.rs"]};
sourcesIndex["diem_state_view"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_swarm"] = {"name":"","files":["faucet.rs","lib.rs"]};
sourcesIndex["diem_temppath"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_time_service"] = {"name":"","files":["interval.rs","lib.rs","mock.rs","real.rs","timeout.rs"]};
sourcesIndex["diem_transaction_benchmarks"] = {"name":"","files":["lib.rs","measurement.rs","transactions.rs"]};
sourcesIndex["diem_transaction_builder"] = {"name":"","files":["error_explain.rs","lib.rs","stdlib.rs"]};
sourcesIndex["diem_transaction_replay"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_transactional_test_harness"] = {"name":"","files":["diem_test_harness.rs","lib.rs"]};
sourcesIndex["diem_types"] = {"name":"","dirs":[{"name":"account_config","dirs":[{"name":"constants","files":["account.rs","addresses.rs","coins.rs","designated_dealer.rs","diem.rs","event.rs","mod.rs"]},{"name":"events","files":["admin_transaction.rs","base_url_rotation.rs","burn.rs","cancel_burn.rs","compliance_key_rotation.rs","create_account.rs","exchange_rate_update.rs","force_shift.rs","mint.rs","mod.rs","new_block.rs","new_epoch.rs","preburn.rs","received_mint.rs","received_payment.rs","sent_payment.rs"]},{"name":"resources","files":["account.rs","balance.rs","chain_id.rs","crsn.rs","currency_info.rs","designated_dealer.rs","dual_attestation.rs","freezing_bit.rs","key_rotation_capability.rs","mod.rs","preburn_balance.rs","preburn_queue.rs","preburn_with_metadata.rs","role.rs","role_id.rs","vasp.rs","vasp_domain.rs","withdraw_capability.rs"]}],"files":["mod.rs"]},{"name":"network_address","files":["encrypted.rs","mod.rs"]},{"name":"nibble","dirs":[{"name":"nibble_path","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"on_chain_config","files":["consensus_config.rs","diem_version.rs","mod.rs","parallel_execution_config.rs","registered_currencies.rs","validator_set.rs","vm_config.rs","vm_publishing_option.rs"]},{"name":"proof","dirs":[{"name":"accumulator","files":["mock.rs","mod.rs"]},{"name":"position","files":["mod.rs"]}],"files":["definition.rs","mod.rs","proptest_proof.rs"]},{"name":"serde_helper","files":["mod.rs","vec_bytes.rs"]},{"name":"test_helpers","files":["mod.rs","transaction_test_helpers.rs"]},{"name":"transaction","files":["authenticator.rs","change_set.rs","helpers.rs","metadata.rs","mod.rs","module.rs","script.rs","transaction_argument.rs"]}],"files":["access_path.rs","account_address.rs","account_state.rs","account_state_blob.rs","block_info.rs","block_metadata.rs","chain_id.rs","contract_event.rs","diem_id_identifier.rs","diem_timestamp.rs","epoch_change.rs","epoch_state.rs","event.rs","ledger_info.rs","lib.rs","mempool_status.rs","move_resource.rs","proptest_types.rs","protocol_spec.rs","state_proof.rs","trusted_state.rs","validator_config.rs","validator_info.rs","validator_signer.rs","validator_verifier.rs","vm_status.rs","waypoint.rs","write_set.rs"]};
sourcesIndex["diem_validator_interface"] = {"name":"","files":["json_rpc_interface.rs","lib.rs","storage_interface.rs"]};
sourcesIndex["diem_vault_client"] = {"name":"","files":["dev.rs","fuzzing.rs","lib.rs"]};
sourcesIndex["diem_vm"] = {"name":"","dirs":[{"name":"parallel_executor","files":["mod.rs","read_write_set_analyzer.rs","storage_wrapper.rs","vm_wrapper.rs"]}],"files":["access_path_cache.rs","adapter_common.rs","counters.rs","data_cache.rs","diem_vm.rs","diem_vm_impl.rs","errors.rs","lib.rs","logging.rs","natives.rs","read_write_set_analysis.rs","script_to_script_function.rs","system_module_names.rs","transaction_metadata.rs"]};
sourcesIndex["diem_wallet"] = {"name":"","files":["error.rs","internal_macros.rs","io_utils.rs","key_factory.rs","lib.rs","mnemonic.rs","wallet_library.rs"]};
sourcesIndex["diem_workspace_hack"] = {"name":"","files":["lib.rs"]};
sourcesIndex["diem_writeset_generator"] = {"name":"","dirs":[{"name":"release_flow","files":["artifacts.rs","create.rs","mod.rs","verify.rs"]}],"files":["admin_script_builder.rs","lib.rs","old_releases.rs","writeset_builder.rs"]};
sourcesIndex["diemdb"] = {"name":"","dirs":[{"name":"backup","files":["backup_handler.rs","mod.rs","restore_handler.rs"]},{"name":"diemsum","files":["mod.rs"]},{"name":"event_store","files":["mod.rs"]},{"name":"ledger_counters","files":["mod.rs"]},{"name":"ledger_store","files":["mod.rs"]},{"name":"pruner","files":["mod.rs"]},{"name":"schema","dirs":[{"name":"epoch_by_version","files":["mod.rs"]},{"name":"event","files":["mod.rs"]},{"name":"event_accumulator","files":["mod.rs"]},{"name":"event_by_key","files":["mod.rs"]},{"name":"event_by_version","files":["mod.rs"]},{"name":"jellyfish_merkle_node","files":["mod.rs"]},{"name":"ledger_counters","files":["mod.rs"]},{"name":"ledger_info","files":["mod.rs"]},{"name":"stale_node_index","files":["mod.rs"]},{"name":"transaction","files":["mod.rs"]},{"name":"transaction_accumulator","files":["mod.rs"]},{"name":"transaction_by_account","files":["mod.rs"]},{"name":"transaction_by_hash","files":["mod.rs"]},{"name":"transaction_info","files":["mod.rs"]},{"name":"write_set","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"state_store","files":["mod.rs"]},{"name":"system_store","files":["mod.rs"]},{"name":"transaction_store","files":["mod.rs"]}],"files":["change_set.rs","diemdb_test.rs","errors.rs","lib.rs","metrics.rs","test_helper.rs"]};
sourcesIndex["disassembler"] = {"name":"","files":["disassembler.rs","lib.rs"]};
sourcesIndex["docgen"] = {"name":"","files":["docgen.rs","lib.rs"]};
sourcesIndex["errmapgen"] = {"name":"","files":["errmapgen.rs","lib.rs"]};
sourcesIndex["event_notifications"] = {"name":"","files":["lib.rs"]};
sourcesIndex["execution_correctness"] = {"name":"","files":["execution_correctness.rs","execution_correctness_manager.rs","lib.rs","local.rs","process.rs","remote_service.rs","serializer.rs","thread.rs"]};
sourcesIndex["executor"] = {"name":"","dirs":[{"name":"speculation_cache","files":["mod.rs"]}],"files":["block_executor_impl.rs","chunk_executor_impl.rs","db_bootstrapper.rs","fuzzing.rs","lib.rs","logging.rs","metrics.rs","transaction_replayer_impl.rs"]};
sourcesIndex["executor_benchmark"] = {"name":"","files":["db_generator.rs","lib.rs","transaction_committer.rs","transaction_executor.rs","transaction_generator.rs"]};
sourcesIndex["executor_test_helpers"] = {"name":"","files":["integration_test_impl.rs","lib.rs"]};
sourcesIndex["executor_types"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["fallible"] = {"name":"","files":["copy_from_slice.rs","lib.rs"]};
sourcesIndex["forge"] = {"name":"","dirs":[{"name":"backend","dirs":[{"name":"k8s","files":["cluster_helper.rs","mod.rs","node.rs","swarm.rs"]},{"name":"local","files":["cargo.rs","mod.rs","node.rs","swarm.rs"]}],"files":["mod.rs"]},{"name":"interface","files":["admin.rs","chain_info.rs","factory.rs","mod.rs","network.rs","node.rs","public.rs","swarm.rs","test.rs"]}],"files":["lib.rs","report.rs","runner.rs","slack.rs"]};
sourcesIndex["forge_cli"] = {"name":"","files":["lib.rs"]};
sourcesIndex["framework_releases"] = {"name":"","files":["lib.rs"]};
sourcesIndex["functional_tests"] = {"name":"","dirs":[{"name":"checker","files":["directives.rs","matcher.rs","mod.rs"]},{"name":"config","files":["block_metadata.rs","global.rs","mod.rs","transaction.rs"]}],"files":["common.rs","compiler.rs","errors.rs","evaluator.rs","genesis_accounts.rs","lib.rs","preprocessor.rs","testsuite.rs"]};
sourcesIndex["generate_format"] = {"name":"","files":["consensus.rs","diem.rs","lib.rs","linter.rs","move_abi.rs","network.rs"]};
sourcesIndex["generate_key"] = {"name":"","files":["lib.rs"]};
sourcesIndex["invalid_mutations"] = {"name":"","dirs":[{"name":"bounds","files":["code_unit.rs"]}],"files":["bounds.rs","helpers.rs","lib.rs","signature.rs"]};
sourcesIndex["ir_to_bytecode"] = {"name":"","files":["compiler.rs","context.rs","lib.rs","parser.rs"]};
sourcesIndex["ir_to_bytecode_syntax"] = {"name":"","files":["lexer.rs","lib.rs","syntax.rs"]};
sourcesIndex["jsonrpc_integration_tests"] = {"name":"","files":["helper.rs","lib.rs"]};
sourcesIndex["jsonrpc_types_proto"] = {"name":"","files":["constants.rs","lib.rs"]};
sourcesIndex["language_benchmarks"] = {"name":"","files":["lib.rs","measurement.rs","move_vm.rs"]};
sourcesIndex["language_e2e_tests"] = {"name":"","dirs":[{"name":"account_universe","files":["bad_transaction.rs","create_account.rs","peer_to_peer.rs","rotate_key.rs","universe.rs"]},{"name":"execution_strategies","files":["basic_strategy.rs","guided_strategy.rs","mod.rs","multi_strategy.rs","random_strategy.rs","types.rs"]}],"files":["account.rs","account_universe.rs","common_transactions.rs","compile.rs","currencies.rs","data_store.rs","executor.rs","gas_costs.rs","golden_outputs.rs","lib.rs","on_chain_configs.rs","proptest_types.rs","utils.rs","versioning.rs"]};
sourcesIndex["language_e2e_testsuite"] = {"name":"","files":["lib.rs"]};
sourcesIndex["mempool_notifications"] = {"name":"","files":["lib.rs"]};
sourcesIndex["memsocket"] = {"name":"","files":["lib.rs"]};
sourcesIndex["mirai_dataflow_analysis"] = {"name":"","files":["lib.rs"]};
sourcesIndex["module_generation"] = {"name":"","files":["generator.rs","lib.rs","options.rs","padding.rs","utils.rs"]};
sourcesIndex["move_analyzer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["move_binary_format"] = {"name":"","dirs":[{"name":"proptest_types","files":["constants.rs","functions.rs","signature.rs","types.rs"]}],"files":["access.rs","binary_views.rs","check_bounds.rs","compatibility.rs","constant.rs","control_flow_graph.rs","deserializer.rs","errors.rs","file_format.rs","file_format_common.rs","internals.rs","lib.rs","normalized.rs","proptest_types.rs","serializer.rs","views.rs"]};
sourcesIndex["move_bytecode_utils"] = {"name":"","files":["dependency_graph.rs","layout.rs","lib.rs","module_cache.rs"]};
sourcesIndex["move_bytecode_viewer"] = {"name":"","dirs":[{"name":"tui","files":["mod.rs","text_builder.rs","tui_interface.rs"]}],"files":["bytecode_viewer.rs","interfaces.rs","lib.rs","source_viewer.rs","viewer.rs"]};
sourcesIndex["move_cli"] = {"name":"","dirs":[{"name":"base","dirs":[{"name":"commands","files":["check.rs","compile.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"experimental","dirs":[{"name":"commands","files":["mod.rs","read_writeset_analysis.rs"]}],"files":["cli.rs","mod.rs"]},{"name":"package","files":["cli.rs","mod.rs"]},{"name":"sandbox","dirs":[{"name":"commands","files":["doctor.rs","generate.rs","mod.rs","publish.rs","run.rs","test.rs","view.rs"]},{"name":"utils","files":["mod.rs","mode.rs","on_disk_state_view.rs","package.rs"]}],"files":["cli.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["move_command_line_common"] = {"name":"","files":["character_sets.rs","env.rs","files.rs","lib.rs","testing.rs"]};
sourcesIndex["move_core_types"] = {"name":"","files":["abi.rs","account_address.rs","effects.rs","errmap.rs","gas_schedule.rs","identifier.rs","language_storage.rs","lib.rs","move_resource.rs","parser.rs","proptest_types.rs","resolver.rs","transaction_argument.rs","value.rs","vm_status.rs"]};
sourcesIndex["move_coverage"] = {"name":"","files":["coverage_map.rs","lib.rs","source_coverage.rs","summary.rs"]};
sourcesIndex["move_ir_types"] = {"name":"","files":["ast.rs","lib.rs","location.rs","spec_language_ast.rs"]};
sourcesIndex["move_lang"] = {"name":"","dirs":[{"name":"cfgir","dirs":[{"name":"borrows","files":["mod.rs","state.rs"]},{"name":"liveness","files":["mod.rs","state.rs"]},{"name":"locals","files":["mod.rs","state.rs"]}],"files":["absint.rs","ast.rs","cfg.rs","constant_fold.rs","eliminate_locals.rs","inline_blocks.rs","mod.rs","remove_no_ops.rs","simplify_jumps.rs","translate.rs"]},{"name":"command_line","files":["compiler.rs","mod.rs"]},{"name":"diagnostics","files":["codes.rs","mod.rs"]},{"name":"expansion","files":["aliases.rs","ast.rs","byte_string.rs","dependency_ordering.rs","hex_string.rs","mod.rs","translate.rs","unique_modules_after_mapping.rs"]},{"name":"hlir","files":["ast.rs","mod.rs","translate.rs"]},{"name":"naming","files":["ast.rs","mod.rs","translate.rs"]},{"name":"parser","files":["ast.rs","comments.rs","lexer.rs","merge_spec_modules.rs","mod.rs","sources_shadow_deps.rs","syntax.rs"]},{"name":"shared","files":["ast_debug.rs","mod.rs","remembering_unique_map.rs","unique_map.rs","unique_set.rs"]},{"name":"to_bytecode","files":["context.rs","mod.rs","remove_fallthrough_jumps.rs","translate.rs"]},{"name":"typing","files":["ast.rs","core.rs","expand.rs","globals.rs","infinite_instantiations.rs","mod.rs","recursive_structs.rs","translate.rs"]},{"name":"unit_test","files":["filter_test_members.rs","mod.rs","plan_builder.rs"]}],"files":["compiled_unit.rs","interface_generator.rs","ir_translation.rs","lib.rs"]};
sourcesIndex["move_lang_functional_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["move_lang_transactional_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["move_model"] = {"name":"","dirs":[{"name":"builder","files":["exp_translator.rs","mod.rs","model_builder.rs","module_builder.rs","spec_builtins.rs"]}],"files":["ast.rs","code_writer.rs","exp_generator.rs","exp_rewriter.rs","lib.rs","model.rs","native.rs","options.rs","pragmas.rs","spec_translator.rs","symbol.rs","ty.rs"]};
sourcesIndex["move_oncall_trainer"] = {"name":"","dirs":[{"name":"experiments","files":["get_sequence_number.rs","get_writeset_version.rs","mod.rs"]}],"files":["init.rs","lib.rs"]};
sourcesIndex["move_package"] = {"name":"","dirs":[{"name":"compilation","files":["build_plan.rs","compiled_package.rs","mod.rs","model_builder.rs","package_layout.rs"]},{"name":"resolution","files":["digest.rs","mod.rs","resolution_graph.rs"]},{"name":"source_package","files":["layout.rs","manifest_parser.rs","mod.rs","parsed_manifest.rs"]}],"files":["lib.rs"]};
sourcesIndex["move_prover"] = {"name":"","files":["cli.rs","lib.rs"]};
sourcesIndex["move_prover_test_utils"] = {"name":"","files":["baseline_test.rs","lib.rs"]};
sourcesIndex["move_read_write_set_types"] = {"name":"","files":["access.rs","lib.rs"]};
sourcesIndex["move_stdlib"] = {"name":"","dirs":[{"name":"natives","files":["bcs.rs","debug.rs","event.rs","hash.rs","mod.rs","signer.rs","unit_test.rs","vector.rs"]}],"files":["lib.rs","utils.rs"]};
sourcesIndex["move_symbol_pool"] = {"name":"","files":["lib.rs","pool.rs","symbol.rs"]};
sourcesIndex["move_transactional_test_runner"] = {"name":"","files":["framework.rs","lib.rs","tasks.rs","vm_test_harness.rs"]};
sourcesIndex["move_unit_test"] = {"name":"","files":["cargo_runner.rs","lib.rs","test_reporter.rs","test_runner.rs"]};
sourcesIndex["move_vm_integration_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["move_vm_runtime"] = {"name":"","files":["data_cache.rs","debug.rs","interpreter.rs","lib.rs","loader.rs","logging.rs","move_vm.rs","native_functions.rs","runtime.rs","session.rs","tracing.rs"]};
sourcesIndex["move_vm_test_utils"] = {"name":"","files":["lib.rs","storage.rs"]};
sourcesIndex["move_vm_transactional_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["move_vm_types"] = {"name":"","dirs":[{"name":"loaded_data","files":["mod.rs","runtime_types.rs"]},{"name":"natives","files":["function.rs","mod.rs"]},{"name":"values","files":["mod.rs","values_impl.rs"]}],"files":["data_store.rs","gas_schedule.rs","lib.rs"]};
sourcesIndex["mvhashmap"] = {"name":"","files":["lib.rs"]};
sourcesIndex["netcore"] = {"name":"","dirs":[{"name":"transport","files":["and_then.rs","boxed.rs","memory.rs","mod.rs","proxy_protocol.rs","tcp.rs"]}],"files":["framing.rs","lib.rs"]};
sourcesIndex["network"] = {"name":"","dirs":[{"name":"application","files":["interface.rs","mod.rs","storage.rs","types.rs"]},{"name":"connectivity_manager","files":["builder.rs","mod.rs"]},{"name":"noise","files":["error.rs","fuzzing.rs","handshake.rs","mod.rs","stream.rs"]},{"name":"peer","files":["fuzzing.rs","mod.rs"]},{"name":"peer_manager","files":["builder.rs","conn_notifs_channel.rs","error.rs","mod.rs","senders.rs","transport.rs","types.rs"]},{"name":"protocols","dirs":[{"name":"direct_send","files":["mod.rs"]},{"name":"health_checker","files":["builder.rs","interface.rs","mod.rs"]},{"name":"network","files":["mod.rs"]},{"name":"rpc","files":["error.rs","mod.rs"]},{"name":"wire","dirs":[{"name":"handshake","dirs":[{"name":"v1","files":["mod.rs"]}]},{"name":"messaging","dirs":[{"name":"v1","files":["mod.rs"]}]}],"files":["handshake.rs","messaging.rs","mod.rs"]}],"files":["identity.rs","mod.rs"]},{"name":"testutils","files":["builder.rs","fake_socket.rs","mod.rs","test_framework.rs","test_node.rs"]},{"name":"transport","files":["mod.rs"]}],"files":["constants.rs","counters.rs","error.rs","fuzzing.rs","lib.rs","logging.rs"]};
sourcesIndex["network_builder"] = {"name":"","files":["builder.rs","dummy.rs","lib.rs"]};
sourcesIndex["network_discovery"] = {"name":"","files":["counters.rs","file.rs","lib.rs","validator_set.rs"]};
sourcesIndex["num_variants"] = {"name":"","files":["lib.rs"]};
sourcesIndex["offchain"] = {"name":"","files":["identifier.rs","jws.rs","lib.rs","payment_command.rs","subaddress.rs","types.rs"]};
sourcesIndex["prover_lab"] = {"name":"","files":["benchmark.rs","lib.rs","plot.rs","z3log.rs"]};
sourcesIndex["prover_mutation"] = {"name":"","files":["lib.rs","mutator.rs"]};
sourcesIndex["proxy"] = {"name":"","files":["lib.rs"]};
sourcesIndex["read_write_set"] = {"name":"","files":["lib.rs"]};
sourcesIndex["read_write_set_dynamic"] = {"name":"","files":["dynamic_analysis.rs","lib.rs","normalize.rs"]};
sourcesIndex["resource_viewer"] = {"name":"","files":["fat_type.rs","lib.rs","module_cache.rs","resolver.rs"]};
sourcesIndex["safety_rules"] = {"name":"","files":["configurable_validator_signer.rs","consensus_state.rs","counters.rs","error.rs","fuzzing_utils.rs","lib.rs","local_client.rs","logging.rs","persistent_safety_storage.rs","process.rs","remote_service.rs","safety_rules.rs","safety_rules_2chain.rs","safety_rules_manager.rs","serializer.rs","t_safety_rules.rs","test_utils.rs","thread.rs"]};
sourcesIndex["schemadb"] = {"name":"","files":["lib.rs","metrics.rs","schema.rs"]};
sourcesIndex["scratchpad"] = {"name":"","dirs":[{"name":"sparse_merkle","dirs":[{"name":"test_utils","files":["mod.rs","naive_smt.rs","proof_reader.rs","proptest_helpers.rs"]}],"files":["mod.rs","node.rs","updater.rs","utils.rs"]}],"files":["lib.rs"]};
sourcesIndex["scratchpad_benchmark"] = {"name":"","files":["lib.rs"]};
sourcesIndex["sdk_compatibility"] = {"name":"","files":["lib.rs"]};
sourcesIndex["seed_peer_generator"] = {"name":"","files":["lib.rs","utils.rs"]};
sourcesIndex["serializer_tests"] = {"name":"","files":["lib.rs"]};
sourcesIndex["short_hex_str"] = {"name":"","files":["lib.rs"]};
sourcesIndex["shuffle"] = {"name":"","files":["account.rs","deploy.rs","lib.rs","new.rs","shared.rs","test.rs"]};
sourcesIndex["shuffle_custom_move_code"] = {"name":"","files":["lib.rs"]};
sourcesIndex["shuffle_integration_tests"] = {"name":"","files":["helper.rs","lib.rs"]};
sourcesIndex["smoke_test"] = {"name":"","files":["event_fetcher.rs","fullnode.rs","lib.rs","replay_tooling.rs","rest_api.rs","scripts_and_modules.rs","transaction.rs","verifying_client.rs"]};
sourcesIndex["socket_bench_server"] = {"name":"","files":["lib.rs"]};
sourcesIndex["spec_flatten"] = {"name":"","files":["ast_print.rs","exp_inlining.rs","exp_trimming.rs","lib.rs","workflow.rs"]};
sourcesIndex["state_sync_multiplexer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["state_sync_v1"] = {"name":"","files":["bootstrapper.rs","chunk_request.rs","chunk_response.rs","client.rs","coordinator.rs","counters.rs","error.rs","executor_proxy.rs","fuzzing.rs","lib.rs","logging.rs","network.rs","request_manager.rs","shared_components.rs"]};
sourcesIndex["state_sync_v2"] = {"name":"","files":["lib.rs"]};
sourcesIndex["storage_client"] = {"name":"","files":["lib.rs"]};
sourcesIndex["storage_interface"] = {"name":"","files":["lib.rs","mock.rs","state_view.rs"]};
sourcesIndex["storage_service"] = {"name":"","files":["lib.rs"]};
sourcesIndex["storage_service_client"] = {"name":"","files":["lib.rs"]};
sourcesIndex["storage_service_server"] = {"name":"","files":["lib.rs","logging.rs","metrics.rs","network.rs"]};
sourcesIndex["storage_service_types"] = {"name":"","files":["lib.rs"]};
sourcesIndex["swiss_knife"] = {"name":"","files":["helpers.rs","lib.rs"]};
sourcesIndex["test_generation"] = {"name":"","files":["abstract_state.rs","borrow_graph.rs","bytecode_generator.rs","config.rs","control_flow_graph.rs","error.rs","lib.rs","summaries.rs","transitions.rs"]};
sourcesIndex["testcases"] = {"name":"","files":["compatibility_test.rs","fixed_tps_test.rs","gas_price_test.rs","lib.rs","partial_nodes_down_test.rs","performance_test.rs"]};
sourcesIndex["transaction_builder_generator"] = {"name":"","files":["common.rs","cpp.rs","csharp.rs","golang.rs","java.rs","lib.rs","python3.rs","rust.rs","typescript.rs"]};
sourcesIndex["transaction_emitter"] = {"name":"","files":["atomic_histogram.rs","lib.rs"]};
sourcesIndex["vm_genesis"] = {"name":"","files":["genesis_context.rs","lib.rs"]};
sourcesIndex["vm_validator"] = {"name":"","dirs":[{"name":"mocks","files":["mock_vm_validator.rs","mod.rs"]}],"files":["lib.rs","vm_validator.rs"]};
sourcesIndex["x_core"] = {"name":"","files":["core_config.rs","debug_ignore.rs","errors.rs","git.rs","graph.rs","lib.rs","workspace_subset.rs"]};
sourcesIndex["x_lint"] = {"name":"","files":["content.rs","file_path.rs","lib.rs","package.rs","project.rs","runner.rs"]};
createSourceSidebar();
