const through2 = require("through2")

process.stdin.pipe(through2({ encoding: "base64" })).pipe(process.stdout)
