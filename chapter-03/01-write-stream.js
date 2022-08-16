const fs = require("node:fs");
const path = require("node:path");

const file = fs.createWriteStream(
  path.join(path.dirname(__filename), "./file.txt")
);

for (let i = 0; i <= 10; i++) {
  file.write(
    "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n"
  );
}
