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

- Events emitted on readable streams: 

| Event's name | Event's description                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| `close`      | Emitted when the stream and any of the stream's resources have been closed. No further events will be emitted |
| `data`       | Emitted when new data is read from the stream                                                                 |
| `end`        | Emitted when all available data has been read                                                                 |
| `error`      | Emitted when the readable stream experiences an error                                                         |
| `pause`      | Emitted when the readable stream is paused                                                                    |
| `readable`   | Emitted when there is data available to be read                                                               |
| `resume`     | Emitted when a readable stream resumes after being in a paused state                                          |


- Events emitted on writable streams:

| Event's name | Event's description                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| `close`      | Emitted when the stream and any of the stream's resources have been closed. No further events will be emitted |
| `drain`      | Emitted when the writable stream can resume writing data                                                      |
| `error`      | Emitted when the writeable stream experiences an error                                                        |
| `finish`     | Emitted when the writeable stream has ended and all writes have completed                                     |
| `pipe`       | Emitted when the `stream.pipe()` method is called on a readable stream                                        |
| `unpipe`     | Emitted when the `stream.unpipe()` method is called on a readable stream                                      |

- An [overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) of HTTP
- [Postman Echo](https://postman-echo.com) is a service you can use to test your REST clients and make sample API calls
- HTTP [status](https://www.rfc-editor.org/rfc/rfc2616#section-10) codes
- To check if a SMTP server is listening on port `4321` use either `telnet localhost 4321` or `nc -v localhost 4321`
- Prefer [`netcat`](https://blog.benstein.nl/posts/Telnet-is-dead-long-live-netcat) instead of [`telnet`](https://superuser.com/a/1461622)
- List the contents of your `node_modules` directory: `npm list`
- To see where the `formidable` package was installed type `which formidable` or `where formidable` (for Windows) 
- GitHub's default [.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore) file for Node.js
- `npm`'s semver [ranges](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)
- [Differences](https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs) between ES modules and CommonJS
- [Scaffold](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#overview) an Express.js application: `npx express-generator --view=ejs express-generated-app`
- [`async`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) syntax landend in Node.js [7.6.0](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V7.md#7.6.0) 
- Fastify vs Express: which [is](https://youtu.be/SlUNZZaZhFU) better? 
- Generate a Fastify application from the [command line](https://github.com/fastify/fastify-cli#usage): `npx fastify-cli generate fastify-generated-app`
- [Install](https://youtu.be/2TKh3aokgec) Docker inside of WSL
- List Docker containers: `docker ps`
- Stop a Docker container: `docker stop containerID`
- Remove a Docker container: `docker rm --force containerID`
- Remove all Docker containers: `docker rm --force $(docker ps --all --quiet)`
- Start a [MySQL](https://geshan.com.np/blog/2022/02/mysql-docker-compose/#run-mysql-with-docker) v8 database listening on port `3306`: `docker run --publish 3306:3306 --name node-mysql --env MYSQL_ROOT_PASSWORD=PASSWORD --detach mysql:8.0`
- Connect to MySQL from Node.js using [mysql2](https://geshan.com.np/blog/2020/11/nodejs-mysql-tutorial/#wire-up-node.js-with-mysql) package
- Start a PostgreSQL v14.5 database listening on port `5432`: `docker run --publish 5432:5432 --name node-postgres --env POSTGRES_PASSWORD=PASSWORD --detach postgres:14.5`
- The [`pg`](https://node-postgres.com/features/connecting#environment-variables) module automatically looks for specifically named [variables](https://www.postgresql.org/docs/current/libpq-envars.html) (`PGPORT`, `PGPASSWORD`, and `PGUSER`)
- Builtin PostgreSQL [types](https://github.com/brianc/node-pg-types/blob/master/lib/builtins.js) with stable [OID](https://www.postgresql.org/docs/current/datatype-oid.html)
- Start a MongoDB v4.2.22 database listening on port `27017`: `docker run --publish 27017:27017 --name node-mongo --detach mongo:4.2.22`
- Start a Redis v7.0.4 database listening on port `6379`: `docker run --publish 6379:6379 --name node-redis --detach redis:7.0.4`
- Start a password protected Redis database listening on port `6380`: `docker run --name node-redis-pwd -d -p 6380:6379 redis redis-server --requirepass PASSWORD`
- [How](https://flaviocopes.com/how-to-use-redis-nodejs) to use Redis with Node.js
- Redis [cheat sheet](https://github.com/CyberT33N/redis-cheat-sheet) with the most needed stuff
- Replace `redis` with [`ioredis`](https://ably.com/blog/migrating-from-node-redis-to-ioredis)
- Implement [caching](https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis) in Node.js Using Redis
- [LevelDB](https://github.com/cyberwizardinstitute/workshops/blob/master/leveldb.markdown) workshop
- LevelDB [playlist](https://www.youtube.com/playlist?list=PLlOo05o5nzJTSXUQqxaWEz24vV0eq2mSH) by BlessYahu
- LevelDB [playlist](https://www.youtube.com/playlist?list=PLaCN8MYUet0tR1xn5d8ZtCumHKtP6Wkeq) by Wei Zhou
- [`tape`](www.npmjs.com/package/tape) assertion [methods](https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf#page=23) 
-  Trust [proxy](https://expressjs.com/en/guide/behind-proxies.html) configuration for Express.js 
