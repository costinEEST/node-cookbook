const fs = require("node:fs");
const path = require("node:path");
const { pipeline, Transform } = require("node:stream");

pipeline(
  fs.createReadStream(path.join(path.dirname(__filename), "./file.txt")),
  new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  }),
  fs.createWriteStream(path.join(path.dirname(__filename), "./newFile.txt")),
  (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  }
);
