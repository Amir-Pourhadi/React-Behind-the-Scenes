const express = require("express");
const { port } = require("./config.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, APSignals!");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
