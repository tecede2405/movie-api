// src/app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const movieRoutes = require("./routers/movie.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Movie API is running" });
});

app.use("/api", movieRoutes);

module.exports = app;
