const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // đã connect
  }
  await mongoose.connect(process.env.MONGO_URI, {
    maxPoolSize: 5,
  });
  console.log("✅ MongoDB connected");
};

module.exports = connectDB;