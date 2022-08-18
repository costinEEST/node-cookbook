/**
 * Use the http module to make a HTTP request
 *
 * https://nodejs.org/api/buffer.html#static-method-bufferbytelengthstring-encoding
 * https://nodejs.org/api/http.html#http_http_request_options_callback
 * */

const https = require("node:https");

const payload = `{
    "name": "Beth",
    "job": "Software Engineer"
  }`;

const opts = {
  method: "POST",
  hostname: "postman-echo.com",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = https.request(opts, (res) => {
  process.stdout.write("Status Code: " + res.statusCode + "\n");
  process.stdout.write("Body: ");
  res.pipe(process.stdout);
});

req.on("error", (err) => console.error("Error: ", err)).end(payload);
