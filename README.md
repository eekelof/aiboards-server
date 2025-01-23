# aiboards server

## Deploy instructions
### Local Machine
```sh
bash tools/builddocker.sh
scp -r tools/docker <destination>
```

### Remote Machine
```sh
sudo docker load -i docker/aiboards_server.tar
sudo docker create --name aiboards_server --env-file .env -p 3000:3000 --restart unless-stopped aiboards_server
sudo docker start aiboards_server
```