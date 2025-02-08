#!/bin/bash

# Update .env
echo "Updating .env"
sed -i "s|LOG_LEVEL=debug|LOG_LEVEL=${LOG_LEVEL:-info}|" ./build/.env

# Start service
echo "Starting app"
cd build && node app.js
