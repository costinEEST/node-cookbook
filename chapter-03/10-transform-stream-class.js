/**
 * Convert all the text from our file into uppercase
 *
 * https://nodejs.org/api/stream.html#transform_transformchunk-encoding-callback
 * */

const fs = require("node:fs");
const path = require("node:path");
const { Transform } = require("node:stream");

class Uppercase extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, _, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

fs.createReadStream(path.join(path.dirname(__filename), "file.txt"))
  .pipe(new Uppercase())
  .pipe(
    fs.createWriteStream(path.join(path.dirname(__filename), "newFile.txt"))
  );
