/**
 * Create a small program that returns information about a file, using functions provided by the fs module
 *
 * https://nodejs.org/api/process.html#processargv
 * https://nodejs.org/api/fs.html#filehandlestatoptions
 * https://nodejs.dev/learn/nodejs-file-stats
 * https://static.packt-cdn.com/downloads/9781838558758_ColorImages.pdf#page=8
 * https://coderrocketfuel.com/article/how-to-get-the-stats-for-a-file-in-node-js
 * */

const fs = require("node:fs");

fs.stat(process.argv[2], (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats);
});
