const fs = require("node:fs");
const path = require("node:path");
const { promisify } = require("node:util");
const { pipeline, Transform } = require("node:stream");

const promisePipeline = promisify(pipeline);

(async () => {
  await promisePipeline(
    fs.createReadStream(path.join(path.dirname(__filename), "./file.txt")),
    new Transform({
      transform(chunk, _, callback) {
        callback(null, chunk.toString().toUpperCase());
      },
    }),
    fs.createWriteStream(path.join(path.dirname(__filename), "./newFile.txt"))
  );
  console.log("Pipeline succeeded.");
})().catch((err) => {
  console.error("Pipeline failed.", err);
});
