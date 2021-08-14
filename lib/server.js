const express = require("express");
const { port } = require("./config.js");
const path = require("path");

const app = express();

// template engine variables
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "This is APSignals" });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
