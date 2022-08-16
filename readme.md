- 4th edition: [repo](https://github.com/PacktPublishing/Node.js-14-Cookbook), [buy](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758), [images](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf), [14.x](https://github.com/nodejs/release#release-schedule), [APIs](https://nodejs.org/dist/latest-v14.x/docs/api/all.html), [deprecated APIs](https://nodejs.org/dist/latest-v14.x/docs/api/deprecations.html), [changelog](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md)
- 3rd edition: [repo](https://github.com/PacktPublishing/Node-Cookbook-3rd-Ed), [buy](https://www.packtpub.com/product/node-cookbook-third-edition/9781785880087)
- [Install `nvm` in WSL](https://github.com/nvm-sh/nvm#install--update-script)
- Show the version of [V8](https://nodejs.dev/learn/the-v8-javascript-engine) that is embeded in the NodeJS version that I use: `node -p "process.versions.v8"`
- Starting with [Node.js v14.8](https://nodejs.org/en/blog/release/v14.8.0), [top-level await](https://github.com/tc39/proposal-top-level-await) is available (without the use of the `--harmony-top-level-await` command line flag)
- [Fix](https://stackoverflow.com/a/69277786/1904223) for the file change detection inside of WSL
- The socket's object [events](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf#page=9)
- Mirror of the [streams](https://github.com/nodejs/readable-stream) implementations in Node.js 18.0.0
- Configuration that can be passed to the [`createWriteStream`](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf#page=11) method
- Configuration that can be passed to the [`createReadStream`](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf#page=12) method
- File system [flags](https://nodejs.org/api/fs.html#fs_file_system_flags)
- All Node.js streams are instances of the [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) class
- Readable streams are [asynchronous](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) iterables

| Events emitted on readable streams: |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `close`                             | Emitted when the stream and any of the stream's resources have been closed. No further events will be emitted |
| `data`                              | Emitted when new data is read from the stream                                                                 |
| `end`                               | Emitted when all available data has been read                                                                 |
| `error`                             | Emitted when the readable stream experiences an error                                                         |
| `pause`                             | Emitted when the readable stream is paused                                                                    |
| `readable`                          | Emitted when there is data available to be read                                                               |
| `resume`                            | Emitted when a readable stream resumes after being in a paused state                                          |


| Events emitted on writable streams: |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `close`                             | Emitted when the stream and any of the stream's resources have been closed. No further events will be emitted |
| `drain`                             | Emitted when the writable stream can resume writing data                                                      |
| `error`                             | Emitted when the writeable stream experiences an error                                                        |
| `finish`                            | Emitted when the writeable stream has ended and all writes have completed                                     |
| `pipe`                              | Emitted when the `stream.pipe()` method is called on a readable stream                                        |
| `unpipe`                            | Emitted when the `stream.unpipe()` method is called on a readable stream                                      |

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
