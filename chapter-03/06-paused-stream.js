/**
 * Interact with a readable stream that is in paused mode, which is its default upon creation
 * */

const fs = require("fs");
const path = require("node:path");

const rs = fs.createReadStream(
  path.join(path.dirname(__filename), "./file.txt")
);

rs.on("readable", () => {
  // Read data
  let data = rs.read();
  while (data !== null) {
    console.log("Read chunk:", data.toString());
    data = rs.read();
  }
});

rs.on("end", () => {
  console.log("No more data.");
});
