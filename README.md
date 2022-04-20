# web-node-react-mongo

setup
------------
```shell
docker run -d -it -p 5000:5000 --name node -v ~/Desktop/web-node-react-mongo:/app node:latest
docker run --name db -p 27017:27017-d mongo:latest

docker exec -it node bash
docker exec -it db bash
```

```shell
docker exec -it node bash
  cd app
  yarn
  yarn dev
```
