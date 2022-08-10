- 4th edition: [repo](https://github.com/PacktPublishing/Node.js-14-Cookbook), [buy](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758), [images](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf), [14.x](https://github.com/nodejs/release#release-schedule)
- 3rd edition: [repo](https://github.com/PacktPublishing/Node-Cookbook-3rd-Ed), [buy](https://www.packtpub.com/product/node-cookbook-third-edition/9781785880087)
- [Install `nvm` in WSL](https://github.com/nvm-sh/nvm#install--update-script)

```bash
nvm -v
0.39.1
```

```bash
node -v
v18.3.0
```

```bash
npm -v
8.11.0
```

## https://v8.dev/docs/stack-trace-api

## https://github.com/costinEEST/hsl-to-hex

## filter out logs to STDERR

```sh
echo -e "hi\nthere" | node base64.js 2> /dev/null
```

```sh
echo -e "hi\nthere" | node piping.js
```

## https://stackoverflow.com/questions/53130609/what-is-the-pipe-method-in-nodejs + https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe

## know whether a program is directly connected to a terminal or whether its I/O is being redirected.

```sh
node -p "process.stdin.isTTY"
```

##

```sh
node -p "Buffer.allocUnsafe(1e6).toString()" > file.dat
```
