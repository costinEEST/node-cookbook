const fs = require("node:fs");
const path = require("node:path");

const rs = fs.createReadStream(
  path.join(path.dirname(__filename), "./file.txt")
);

rs.on("data", (data) => {
  console.log("Read chunk:", data.toString());
});

rs.on("end", () => {
  console.log("No more data.");
});
