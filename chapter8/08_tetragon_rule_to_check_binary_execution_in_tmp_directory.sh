jq 'select(.process_exec != null)
  | select(.process_exec.process.binary | contains("/tmp/"))
  | "\(.time) \(.process_exec.process.pod.namespace) \(.process_exec.process.pod.name) \(.process_exec.process.binary) \(.process_exec.process.arguments)"'