/**
 * Create a WebSocket server and a client and send messages between the two
 * */

const { Server } = require("../node_modules/ws/index");

const WebSocketServer = new Server({
  port: 3000,
});

WebSocketServer.on("connection", (socket) => {
  socket.on("message", (msg) => {
    const stringMsg = msg.toString();

    console.log("Received:", stringMsg);

    if (stringMsg === "Hello") socket.send("World!");
  });
});
