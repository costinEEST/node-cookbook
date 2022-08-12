/**
 * Add a delay between the reading and writing of the file
 * 
 * https://nodejs.org/api/timers.html#settimeoutcallback-delay-args
 * https://nodejs.org/api/timers.html#setintervalcallback-delay-args
 * https://nodejs.org/api/timers.html#timeoutunref
 * */ 

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(path.dirname(__filename), "hello.txt");

fs.readFile(filePath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();

  setTimeout(() => updateFile(filePath, upperContents), 10);
});

function updateFile(filePath, contents) {
  fs.writeFile(filePath, contents, (err) => {
    if (err) throw err;
    console.log("File updated.");
  });
}

setInterval(() => process.stdout.write("**** \n"), 1).unref();
