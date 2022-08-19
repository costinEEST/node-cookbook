/**
 * Create a web server that accepts and handles both HTTP GET and HTTP POST requests
 *
 * https://stackoverflow.com/questions/23319033/how-to-get-the-port-number-in-node-js-when-a-request-is-processed
 * https://nodejs.org/api/all.html#all_http_class-httpincomingmessage
 * https://nodejs.org/api/all.html#http_message_socket
 * https://github.com/sindresorhus/get-port
 * */

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const form = fs.readFileSync(
  path.join(path.dirname(__filename), "03-form.html")
);

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      get(res);
      return;
    }
    if (req.method === "POST") {
      post(req, res);
      return;
    }
    error(405, res);
  })
  .listen(3000, null, function () {
    console.log(`Server listening on port: ${this.address().port}`);
  });

function get(res) {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end(form);
}

function post(req, res) {
  if (req.headers["content-type"] !== "application/json") {
    error(415, res);
    return;
  }

  let input = "";

  req.on("data", (chunk) => {
    input += chunk.toString();
  });

  req.on("end", () => {
    const parsed = JSON.parse(input);

    if (parsed.err) {
      error(400, "Bad Request", res);

      return;
    }

    res.end(`{"data": ${input} }`);
  });
}

function error(code, res) {
  res.statusCode = code;
  res.end(http.STATUS_CODES[code]);
}
