# Code Snippets - Docker and Kubernetes Security Book

This directory contains all the captioned code snippets extracted from the Docker and Kubernetes Security book chapters.

## Quick Stats

- **Total snippets**: 49
- **Chapters with snippets**: 7 out of 10
- **Languages**: YAML (40), TypeScript (5), Dockerfile (2), Bash (1), JSON (1)

## Table of Contents

### Chapter 1: Introduction to Containers and Container Security

1. [Pinger Dockerfile](chapter1/01_pinger_dockerfile.dockerfile)
2. [Helm Chart Values File](chapter1/02_helm_chart_values_file.yaml)

### Chapter 2: Vulnerability Scanning and Image Security

1. [GitHub Actions workflow for Trivy](chapter2/1-github-actions-workflow-for-trivy.yaml)
2. [GitHub Actions workflow for Snyk](chapter2/2-github-actions-workflow-for-snyk.yaml)
3. [GitHub Actions workflow for Docker Scout](chapter2/3-github-actions-workflow-for-docker-scout.yaml)
4. [GitHub Actions workflow for Docker Scout compare](chapter2/4-github-actions-workflow-for-docker-scout-compare.yaml)

### Chapter 3: Supply Chain Security for Application Development

1. [HTTP client interface in TypeScript](chapter3/01_http_client_interface_in_typescript.ts)
2. [Axios HTTP client implementation in TypeScript](chapter3/02_axios_http_client_implementation_in_typescript.ts)
3. [User service in TypeScript using HTTP client interface](chapter3/03_user_service_in_typescript_using_http_client_interface.ts)
4. [Dockerfile for Python application](chapter3/04_dockerfile_for_python_application.dockerfile)

### Chapter 5: Integrating Container Security within CI/CD Pipelines

1. [GitHub Actions workflow to build and push a Docker image](chapter5/01_github_actions_workflow_to_build_and_push_a_docker_image.yaml)
2. [Extracting Docker metadata using Docker Metadata Action](chapter5/02_extracting_docker_metadata_using_docker_metadata_action.yaml)
3. [Complete GitHub Actions workflow to build and push a Docker image](chapter5/03_complete_github_actions_workflow_to_build_and_push_a_docker_image.yaml)
4. [GitHub Actions workflow to push the image to multiple registries](chapter5/04_github_actions_workflow_to_push_the_image_to_multiple_registries.yaml)
5. [GitLab CI pipeline to build and push a Docker image](chapter5/05_gitlab_ci_pipeline_to_build_and_push_a_docker_image.yaml)
6. [GitLab CI pipeline with default stage for Docker jobs](chapter5/06_gitlab_ci_pipeline_with_default_stage_for_docker_jobs.yaml)
7. [GitLab CI pipeline to build a Docker image using Kaniko](chapter5/07_gitlab_ci_pipeline_to_build_a_docker_image_using_kaniko.yaml)
8. [GitLab CI pipeline to build a Docker image with SBOM](chapter5/08_gitlab_ci_pipeline_to_build_a_docker_image_with_sbom.yaml)

### Chapter 6: Securing Containers in Kubernetes

1. [Kubernetes Pod Security Context example](chapter6/01_kubernetes_pod_security_context_example.yaml)
2. [Kubernetes Pod Security Context with Linux capabilities](chapter6/02_kubernetes_pod_security_context_with_linux_capabilities.yaml)
3. [Kubernetes Pod Security Context with Seccomp profile](chapter6/03_kubernetes_pod_security_context_with_seccomp_profile.yaml)
4. [Kubernetes Seccomp Profile example](chapter6/04_kubernetes_seccomp_profile_example.json)
5. [Kubernetes Pod Security Context with SELinux context](chapter6/05_kubernetes_pod_security_context_with_selinux_context.yaml)
6. [Kubernetes Pod Security Context with AppArmor profile](chapter6/06_kubernetes_pod_security_context_with_apparmor_profile.yaml)
7. [Kubernetes namespace with Pod Security Admission configuration](chapter6/07_kubernetes_namespace_with_pod_security_admission_configuration.yaml)
8. [Kubernetes Pod with privileged container](chapter6/08_kubernetes_pod_with_privileged_container.yaml)
9. [Kubernetes Secret example](chapter6/09_kubernetes_secret_example.yaml)
10. [Kubernetes Pod with Secret volume mount](chapter6/10_kubernetes_pod_with_secret_volume_mount.yaml)
11. [Kubernetes Pod with Secret as environment variable](chapter6/11_kubernetes_pod_with_secret_as_environment_variable.yaml)
12. [Kubernetes SecretProviderClass for AWS Secrets Manager](chapter6/12_kubernetes_secretproviderclass_for_aws_secrets_manager.yaml)
13. [Kubernetes Pod with AWS Secrets Manager CSI Driver](chapter6/13_kubernetes_pod_with_aws_secrets_manager_csi_driver.yaml)
14. [Kubernetes Pod with AWS Secrets Manager CSI Driver and Secret as environment variable](chapter6/14_kubernetes_pod_with_aws_secrets_manager_csi_driver_and_secret_as_environment_variable.yaml)
15. [Kubernetes NetworkPolicy example](chapter6/15_kubernetes_networkpolicy_example.yaml)
16. [Kubernetes NetworkPolicy deny all example](chapter6/16_kubernetes_networkpolicy_deny_all_example.yaml)

### Chapter 7: Kubernetes Cluster Security

1. [Kubelet configuration file](chapter7/01_kubelet_configuration_file.yaml)
2. [Kubelet configuration file with TLS authentication and authorization](chapter7/02_kubelet_configuration_file_with_tls_authentication_and_authorization.yaml)
3. [Kubelet configuration file with authorization](chapter7/03_kubelet_configuration_file_with_authorization.yaml)
4. [Role resource for creating pods](chapter7/04_role_resource_for_creating_pods.yaml)
5. [RoleBinding resource for binding the pod-creator role to a user](chapter7/05_rolebinding_resource_for_binding_the_pod_creator_role_to_a_user.yaml)
6. [Policy resource for allowing a user to create pods](chapter7/06_policy_resource_for_allowing_a_user_to_create_pods.yaml)

### Chapter 8: Logging, Monitoring, and Auditing in Kubernetes

1. [Prometheus reporter service written in TypeScript](chapter8/01_prometheus_reporter_service_written_in_typescript.ts)
2. [Prometheus configuration file](chapter8/02_prometheus_configuration_file.yaml)
3. [Kubernetes pod spec with health checks](chapter8/03_kubernetes_pod_spec_with_health_checks.yaml)
4. [Health check endpoint in Node.js](chapter8/04_health_check_endpoint_in_nodejs.ts)
5. [Kubernetes audit policy file](chapter8/05_kubernetes_audit_policy_file.yaml)
6. [Falco rule to detect a container running as root](chapter8/06_falco_rule_to_detect_a_container_running_as_root.yaml)
7. [Falco rule to detect a container executing a binary not present in the image](chapter8/07_falco_rule_to_detect_a_container_executing_a_binary_not_present_in_the_image.yaml)
8. [Tetragon rule to check binary execution in /tmp directory](chapter8/08_tetragon_rule_to_check_binary_execution_in_tmp_directory.sh)
9. [Tetragon policy to block reading files in /tmp directory](chapter8/09_tetragon_policy_to_block_reading_files_in_tmp_directory.yaml)

## File Organization

```
snippets/
├── README.md (this file)
├── chapter1/
│   ├── 01_pinger_dockerfile.dockerfile
│   └── 02_helm_chart_values_file.yaml
├── chapter2/
│   ├── 1-github-actions-workflow-for-trivy.yaml
│   ├── 2-github-actions-workflow-for-snyk.yaml
│   ├── 3-github-actions-workflow-for-docker-scout.yaml
│   └── 4-github-actions-workflow-for-docker-scout-compare.yaml
├── chapter3/
│   ├── 01_http_client_interface_in_typescript.ts
│   ├── 02_axios_http_client_implementation_in_typescript.ts
│   ├── 03_user_service_in_typescript_using_http_client_interface.ts
│   └── 04_dockerfile_for_python_application.dockerfile
├── chapter5/
│   ├── 01_github_actions_workflow_to_build_and_push_a_docker_image.yaml
│   ├── 02_extracting_docker_metadata_using_docker_metadata_action.yaml
│   ├── 03_complete_github_actions_workflow_to_build_and_push_a_docker_image.yaml
│   ├── 04_github_actions_workflow_to_push_the_image_to_multiple_registries.yaml
│   ├── 05_gitlab_ci_pipeline_to_build_and_push_a_docker_image.yaml
│   ├── 06_gitlab_ci_pipeline_with_default_stage_for_docker_jobs.yaml
│   ├── 07_gitlab_ci_pipeline_to_build_a_docker_image_using_kaniko.yaml
│   └── 08_gitlab_ci_pipeline_to_build_a_docker_image_with_sbom.yaml
├── chapter6/
│   ├── 01_kubernetes_pod_security_context_example.yaml
│   ├── 02_kubernetes_pod_security_context_with_linux_capabilities.yaml
│   ├── 03_kubernetes_pod_security_context_with_seccomp_profile.yaml
│   ├── 04_kubernetes_seccomp_profile_example.json
│   ├── 05_kubernetes_pod_security_context_with_selinux_context.yaml
│   ├── 06_kubernetes_pod_security_context_with_apparmor_profile.yaml
│   ├── 07_kubernetes_namespace_with_pod_security_admission_configuration.yaml
│   ├── 08_kubernetes_pod_with_privileged_container.yaml
│   ├── 09_kubernetes_secret_example.yaml
│   ├── 10_kubernetes_pod_with_secret_volume_mount.yaml
│   ├── 11_kubernetes_pod_with_secret_as_environment_variable.yaml
│   ├── 12_kubernetes_secretproviderclass_for_aws_secrets_manager.yaml
│   ├── 13_kubernetes_pod_with_aws_secrets_manager_csi_driver.yaml
│   ├── 14_kubernetes_pod_with_aws_secrets_manager_csi_driver_and_secret_as_environment_variable.yaml
│   ├── 15_kubernetes_networkpolicy_example.yaml
│   └── 16_kubernetes_networkpolicy_deny_all_example.yaml
├── chapter7/
│   ├── 01_kubelet_configuration_file.yaml
│   ├── 02_kubelet_configuration_file_with_tls_authentication_and_authorization.yaml
│   ├── 03_kubelet_configuration_file_with_authorization.yaml
│   ├── 04_role_resource_for_creating_pods.yaml
│   ├── 05_rolebinding_resource_for_binding_the_pod_creator_role_to_a_user.yaml
│   └── 06_policy_resource_for_allowing_a_user_to_create_pods.yaml
└── chapter8/
    ├── 01_prometheus_reporter_service_written_in_typescript.ts
    ├── 02_prometheus_configuration_file.yaml
    ├── 03_kubernetes_pod_spec_with_health_checks.yaml
    ├── 04_health_check_endpoint_in_nodejs.ts
    ├── 05_kubernetes_audit_policy_file.yaml
    ├── 06_falco_rule_to_detect_a_container_running_as_root.yaml
    ├── 07_falco_rule_to_detect_a_container_executing_a_binary_not_present_in_the_image.yaml
    ├── 08_tetragon_rule_to_check_binary_execution_in_tmp_directory.sh
    └── 09_tetragon_policy_to_block_reading_files_in_tmp_directory.yaml
```

## Language Breakdown

| Language | Count | Description |
|----------|-------|-------------|
| YAML | 40 | Kubernetes manifests, CI/CD pipelines, configuration files |
| TypeScript | 5 | Service implementations, HTTP clients, monitoring code |
| Dockerfile | 2 | Container build definitions |
| JSON | 1 | Seccomp security profile |
| Bash | 1 | Tetragon security rule |

## Notes

- All code snippets maintain their original formatting and content from the book
- File names are derived from their caption text, converted to lowercase with underscores
- Each file includes the complete code snippet as it appears in the book
- Files are organized by chapter for easy navigation
- Appropriate file extensions are used based on the programming language or markup format