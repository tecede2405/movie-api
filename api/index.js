// api/index.js
const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

// connect DB khi module load
connectDB().catch(err => {
  console.error("❌ DB connect failed:", err.message);
});

module.exports = (req, res) => {
  if (!handler) {
    handler = serverless(app);
  }
  return handler(req, res);
};