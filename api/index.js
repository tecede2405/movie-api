const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;

module.exports = async (req, res) => {
  await connectDB(); // đảm bảo DB đã kết nối

  if (!handler) {
    handler = serverless(app);
  }

  return handler(req, res);
};
