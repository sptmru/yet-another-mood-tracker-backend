#!/bin/bash

# Update .env
echo "Updating .env"
sed -i "s|LOG_LEVEL=debug|LOG_LEVEL=${LOG_LEVEL:-info}|" ./build/.env

sed -i "s|LOKI_ENABLED=false|LOKI_ENABLED=${LOKI_ENABLED:-false}|" ./build/.env
sed -i "s|LOKI_ENDPOINT=http://loki-gateway.svc.cluster.local|LOKI_ENDPOINT=${LOKI_ENDPOINT:-http://loki-gateway.svc.cluster.local}|" ./build/.env
sed -i "s|LOKI_LABEL_JOB=yet-another-mood-tracker-api|LOKI_LABEL_JOB=${LOKI_LABEL_JOB:-yet-another-mood-tracker-api}|" ./build/.env
sed -i "s|LOKI_JSON=false|LOKI_JSON=${LOKI_JSON:-false}|" ./build/.env
sed -i "s|LOKI_INTERVAL=5|LOKI_INTERVAL=${LOKI_INTERVAL:-5}|" ./build/.env
sed -i "s|LOKI_TIMEOUT=10000|LOKI_TIMEOUT=${LOKI_TIMEOUT:-10000}|" ./build/.env

sed -i "s|GRAYLOG_ENABLED=false|GRAYLOG_ENABLED=${GRAYLOG_ENABLED:-false}|" ./build/.env
sed -i "s|GRAYLOG_HOST=graylog|GRAYLOG_HOST=${GRAYLOG_HOST:-graylog}|" ./build/.env
sed -i "s|GRAYLOG_PORT=12201|GRAYLOG_PORT=${GRAYLOG_PORT:-12201}|" ./build/.env
sed -i "s|GRAYLOG_HOSTNAME=graylog|GRAYLOG_HOSTNAME=${GRAYLOG_HOSTNAME:-graylog}|" ./build/.env
sed -i "s|GRAYLOG_FACILITY=yet-another-mood-tracker-api|GRAYLOG_FACILITY=${GRAYLOG_FACILITY:-yet-another-mood-tracker-api}|" ./build/.env
sed -i "s|GRAYLOG_BUFFER_SIZE=1400|GRAYLOG_BUFFER_SIZE=${GRAYLOG_BUFFER_SIZE:-1400}|" ./build/.env

# Start service
echo "Starting app"
cd build && node app.js
