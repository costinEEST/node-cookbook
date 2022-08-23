/**
 * Create a WebSocket server and a client and send messages between the two
 * */

const { readFileSync } = require("node:fs");
const { createServer } = require("node:http");
const { join, dirname } = require("node:path");

createServer((_, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(readFileSync(join(dirname(__filename), "05-index.html")));
}).listen(8080, null, function () {
  console.log(`Client server listening on port: ${this.address().port}`);
});
