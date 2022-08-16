/**
 * Write a script that will process data sequentially, indefinitely
 *
 * https://unix.stackexchange.com/a/324210
 * */

const fs = require("node:fs");

const rs = fs.createReadStream("/dev/urandom");

let size = 0;

rs.on("data", (data) => {
  size += data.length;
  console.log("File size:", size);
});
