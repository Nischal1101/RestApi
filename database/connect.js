require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = () => {
  console.log("database connected");
  console.log(process.env.URL);
  return mongoose.connect(process.env.URL);
};
module.exports = connectDB;
