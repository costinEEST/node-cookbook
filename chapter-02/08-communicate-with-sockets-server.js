/**
 * Create a TCP server using the net Node.js core module
 * */

const net = require("node:net");

const HOSTNAME = "localhost";
const PORT = 3000;

net
  .createServer((socket) => {
    console.log("Client connected.");

    socket.on("data", (name) => {
      socket.write(`Hello ${name}!`);
    });
  })
  .listen(PORT, HOSTNAME);
