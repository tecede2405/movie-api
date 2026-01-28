const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

module.exports = async (req, res) => {
  try {
    await connectDB(); // thử connect DB
  } catch (err) {
    return res.status(500).json({
      error: "Database connection failed",
      details: err.message
    });
  }

  if (!handler) {
    handler = serverless(app);
  }

  return handler(req, res);
};
