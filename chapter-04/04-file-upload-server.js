/**
 *
 * https://nodejs.org/api/http.html#httpstatus_codes
 * https://github.com/node-formidable/formidable
 * https://www.mariokandut.com/how-to-dynamically-load-an-esm-module-in-cjs
 * https://dmitripavlutin.com/ecmascript-modules-dynamic-import
 * */

const { readFileSync } = require("node:fs");
const { createServer, STATUS_CODES } = require("node:http");
const { join, dirname } = require("node:path");
let formidable;

// import("../node_modules/formidable/src/index").then((module) => {
import("../node_modules/formidable/src/Formidable").then((module) => {
  // formidable = module.default();
  // formidable = module.default;
  formidable = module.Formidable;
});
// const formidable = require("../node_modules/formidable/src/index");

// let formidable;

// (async () => {
//   const Formidable = await import(
//     // const { default: formidableDefault } = await import(
//     // "../node_modules/formidable/src/index"
//     "../node_modules/formidable/src/Formidable"
//   );

//   formidable = Formidable;
// })();
// const formidable = await import("../node_modules/formidable/src/index");

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
}).listen(3000);

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
    uploadDir: ".",
  });

  form.parse(req, (err, fields, files) => {
    if (err) return err;
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ fields, files }));
  });
}
