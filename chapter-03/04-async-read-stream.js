const fs = require("node:fs");
const path = require("node:path");

const rs = fs.createReadStream(
  path.join(path.dirname(__filename), "./file.txt")
);

(async () => {
  for await (const chunk of rs) {
    console.log("Read chunk:", chunk.toString());
  }
  console.log("No more data.");
})();
