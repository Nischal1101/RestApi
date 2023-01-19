const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name gentleman"],
  },
  company: {
    type: String,
    required: [true, "please enter the company gentleman"],
  },
  price: Number,
  feature: String,
});
module.exports = mongoose.model("myModel", newSchema);
