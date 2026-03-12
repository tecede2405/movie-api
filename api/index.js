const serverless = require("serverless-http");
const app = require("../src/app");
const connectDB = require("../src/config/db");

let handler;
let isConnected = false;

async function connect() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

module.exports = async (req, res) => {
  await connect();

  if (!handler) {
    handler = serverless(app);
  }

  return handler(req, res);
};