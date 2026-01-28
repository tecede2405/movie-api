// api/index.js
const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

// connect ngay khi module được load
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error("❌ Initial DB connection failed:", err.message);
  }
})();

module.exports = (req, res) => {
  if (!handler) {
    handler = serverless(app);
  }
  return handler(req, res);
};