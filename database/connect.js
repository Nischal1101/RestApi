require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = () => {
  console.log("database connected");
  return mongoose.connect(process.env.URL);
};
module.exports = connectDB;
