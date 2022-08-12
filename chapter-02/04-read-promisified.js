/**
 * https://nodejs.org/dist/latest/docs/api/util.html#utilpromisifyoriginal
 * */ 

const fs = require("node:fs");
const path = require("node:path");
const util = require("node:util");

const filePath = path.join(path.dirname(__filename), "hello.txt");
const readFile = util.promisify(fs.readFile);

(async () => {
  try {
    const contents = await readFile(filePath, "utf8");
    console.log("File Contents:", contents);
  } catch (error) {
    console.error(error);
  }
})();
