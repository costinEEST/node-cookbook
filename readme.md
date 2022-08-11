- 4th edition: [repo](https://github.com/PacktPublishing/Node.js-14-Cookbook), [buy](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758), [images](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf), [14.x](https://github.com/nodejs/release#release-schedule), [APIs](https://nodejs.org/dist/latest-v14.x/docs/api/all.html), [deprecated APIs](https://nodejs.org/dist/latest-v14.x/docs/api/deprecations.html), [changelog](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md)
- 3rd edition: [repo](https://github.com/PacktPublishing/Node-Cookbook-3rd-Ed), [buy](https://www.packtpub.com/product/node-cookbook-third-edition/9781785880087)
- [Install `nvm` in WSL](https://github.com/nvm-sh/nvm#install--update-script)
- Show the version of [V8](https://nodejs.dev/learn/the-v8-javascript-engine) that is embeded in the NodeJS version that I use: `node -p "process.versions.v8"`
- Starting with [Node.js v14.8](https://nodejs.org/en/blog/release/v14.8.0), [top-level await](https://github.com/tc39/proposal-top-level-await) is available (without the use of the `--harmony-top-level-await` command line flag)


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
