const express = require("express");
const { port } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const chalk = require("chalk");
const debug = require("debug")("server");
const path = require("path");

// application initial set ups
const app = express();
app.use(cors());
app.use(morgan("tiny"));

// Template engine variables
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routing logics
app.get("/", (req, res) => {
  res.render("index", { title: "I am in server" });
  res.send("hello");
});

// Server's listening logic:
app.listen(port, () => {
  debug(`App is running on port ${chalk.green(port)}`);
});
