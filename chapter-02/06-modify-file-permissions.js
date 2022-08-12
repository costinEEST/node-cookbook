/**
 * https://nodejs.org/api/fs.html#fs_file_modes
 * https://linux.die.net/man/1/chmod
 * https://mason.gmu.edu/~montecin/UNIXpermiss.htm
 * https://nodejs.org/api/fs.html#fs_file_access_constants
 * */

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(path.dirname(__filename), "./file.txt");

fs.chmodSync(
  filePath,
  fs.constants.S_IRUSR |
    fs.constants.S_IWUSR |
    fs.constants.S_IRGRP |
    fs.constants.S_IWGRP |
    fs.constants.S_IROTH
);

// same as
// fs.chmodSync(filePath, 0o664);
