const express = require("express");

const server = express();
const recipesRouter = require("./recipes/recipes-router");

server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.use("*", (req, res) => {
  res.json({ message: "the API is running! go catch it!" });
});

server.use((error, req, res, next) => {
  res.status(500).json({ message: "internal server error! uh oh!" });
});

module.exports = server;
