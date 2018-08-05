const express = require("express");
const http = require("http");

const app = express();

const httpServer = http.Server(app);

const io = require("socket.io")(httpServer);

io.on("connection", socket => {
  console.log("a client connected");
});

//TODO: Take port from configuration
const PORT = 8088;

app.get("/", (req, res) => {
  res.send("app works!");
});

httpServer.listen(PORT, () => {
  console.log(`app started on http://localhost:${PORT}`);
});
