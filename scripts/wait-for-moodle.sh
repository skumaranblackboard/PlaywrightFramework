#!/usr/bin/env bash
# Wait until the Moodle container answers on its login page.
# First boot installs the database and can take several minutes.
set -euo pipefail

URL="${BASE_URL:-http://localhost:8080}/login/index.php"
TIMEOUT="${MOODLE_WAIT_TIMEOUT:-600}"   # seconds
INTERVAL=10
elapsed=0

echo "Waiting for Moodle at ${URL} (timeout ${TIMEOUT}s)..."
while true; do
    code=$(curl -s -o /dev/null -w "%{http_code}" -m 10 "${URL}" || echo 000)
    if [ "${code}" = "200" ]; then
        echo "Moodle is up (HTTP 200)."
        exit 0
    fi
    if [ "${elapsed}" -ge "${TIMEOUT}" ]; then
        echo "Timed out after ${TIMEOUT}s waiting for Moodle (last HTTP ${code})." >&2
        docker compose logs --tail=50 moodle >&2 || true
        exit 1
    fi
    sleep "${INTERVAL}"
    elapsed=$((elapsed + INTERVAL))
    echo "  ...still waiting (${elapsed}s, last HTTP ${code})"
done
