#!bin/bash
bun build --minify ./src/index.ts --outdir ./dist --target bun
sudo docker build -t aiboards_server .
rm -rf dist

sudo docker save -o ./tools/docker/aiboards_server.tar aiboards_server
sudo chmod 777 ./tools/docker/aiboards_server.tar