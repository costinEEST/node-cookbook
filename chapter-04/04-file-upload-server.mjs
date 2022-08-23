/**
 * Use the formidable module as the multipart parser to handle file uploads
 *
 * https://nodejs.org/api/url.html#urlfileurltopathurl
 * https://stackoverflow.com/a/55944697/1904223
 * https://nodejs.org/api/http.html#httpstatus_codes
 * https://github.com/node-formidable/formidable
 * https://www.npmjs.com/package/formidable-mini
 * https://github.com/mathiasbynens/small/blob/master/c.c
 * https://github.com/mathiasbynens/small/blob/master/json.json
 * */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { createServer, STATUS_CODES } from "node:http";

import formidable from "../node_modules/formidable/src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const form = readFileSync(join(dirname(__filename), "04-form.html"));

createServer((req, res) => {
  if (req.method === "GET") {
    get(res);
    return;
  }
  if (req.method === "POST") {
    post(req, res);
    return;
  }
  error(405, res);
}).listen(3000, null, function () {
  console.log(`Server listening on port: ${this.address().port}`);
});

function get(res) {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end(form);
}

function error(code, res) {
  res.statusCode = code;
  res.end(STATUS_CODES[code]);
}

function post(req, res) {
  if (!/multipart\/form-data/.test(req.headers["content-type"])) {
    error(415, res);
    return;
  }

  const form = formidable({
    multiples: true,
    uploadDir: join(__dirname, "uploads"),
  });
  form.parse(req, (err, fields, files) => {
    if (err) return err;
    console.log(JSON.stringify({ fields, files }, null, "\t"));
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ fields, files }));
  });
}
