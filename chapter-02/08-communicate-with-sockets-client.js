/**
 * Create a TCP client using the net Node.js core module
 * */

const net = require("node:net");

const HOSTNAME = "localhost";
const PORT = 3000;

const socket = net.connect(PORT, HOSTNAME);

socket.write("World");

socket.on("data", (data) => {
  console.log(data.toString());
});
