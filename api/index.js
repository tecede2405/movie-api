const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

const handler = serverless(app);

module.exports = async (req, res) => {
  try {
    await connectDB(); // đảm bảo DB ready
  } catch (err) {
    return res.status(500).json({ error: "DB connection failed" });
  }

  return handler(req, res);
};
