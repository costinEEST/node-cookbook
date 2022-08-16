/**
 * Use the Node.js pipe() method to pipe data between streams
 *
 * https://nodejs.org/api/stream.html#readablepipedestination-options
 * https://nodejs.org/api/process.html#processstdout
 * https://github.com/substack/stream-handbook#pipe
 * https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe
 * */

const fs = require("fs");
const path = require("node:path");

const rs = fs.createReadStream(
  path.join(path.dirname(__filename), "./file.txt")
);

rs.pipe(process.stdout);
