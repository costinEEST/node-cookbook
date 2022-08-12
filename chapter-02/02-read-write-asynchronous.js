const fs = require("node:fs");
const path = require("node:path");

const filepath = path.join(path.dirname(__filename), "hello.txt");

fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();

  fs.writeFile(filepath, upperContents, (err) => {
    if (err) throw err;
    console.log("File updated.");
  });
});
