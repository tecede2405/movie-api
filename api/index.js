const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

module.exports = async (req, res) => {
  try {
    await connectDB();
  } catch (err) {
    console.error("❌ DB ERROR:", err.message);
    return res.status(500).json({ error: "Database connection failed" });
  }

  if (!handler) {
    handler = serverless(app);
  }

  return handler(req, res);
};
