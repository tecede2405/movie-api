const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let isConnected = false;
const handler = serverless(app);

module.exports = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (err) {
      console.error("DB connect error:", err.message);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }

  return handler(req, res);
};
