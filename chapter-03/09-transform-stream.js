/**
 * Convert all the text from our file into uppercase
 *
 * https://nodejs.org/api/stream.html#implementing-a-transform-stream
 * https://github.com/rvagg/through2
 * */

const fs = require("node:fs");
const path = require("node:path");
const { Transform } = require("node:stream");

fs.createReadStream(path.join(path.dirname(__filename), "file.txt"))
  .pipe(
    new Transform({
      transform(chunk, _, callback) {
        callback(null, chunk.toString().toUpperCase());
      },
    })
  )
  .pipe(
    fs.createWriteStream(path.join(path.dirname(__filename), "newFile.txt"))
  );
