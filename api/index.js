const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

module.exports = async (req, res) => {
  return res.json({ message: "Server is alive" });
};

