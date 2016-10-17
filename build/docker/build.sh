#!/bin/bash
CWD="$(cd "$(dirname "$0")" && pwd -P)"
cd "${CWD}/../.."
docker-compose build --force-rm
