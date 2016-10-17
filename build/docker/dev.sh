#!/bin/bash
CWD="$(cd "$(dirname "$0")" && pwd -P)"
cd "${CWD}/../.."
docker run -it --rm -p 10010:8080 --env-file ./.env -e PORT=8080 serviceboilerplate_service /bin/sh
