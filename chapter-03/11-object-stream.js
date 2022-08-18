/**
 * Create a transform stream in object mode
 *
 * https://nodejs.org/api/stream.html#object-mode
 * https://github.com/ndjson/ndjson.js
 * */

const { Transform } = require("stream");
const { stringify } = require("../node_modules/ndjson/index");

const Name = Transform({
  objectMode: true,
  transform: ({ forename, surname }, _, callback) => {
    callback(null, { name: `${forename} ${surname}` });
  },
});

Name.pipe(stringify()).pipe(process.stdout);

Name.write({ forename: "John", surname: "Doe" });
Name.write({ forename: "Jane", surname: "Doe" });
