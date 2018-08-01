const express = require("express");

const server = express();

//TODO: Take port from configuration
const PORT = 8088;

server.get("/", (req, res) => {
  res.send("Server works!");
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
