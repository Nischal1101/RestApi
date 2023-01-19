const express = require("express");
const app = express();
require("dotenv").config();
const productJson = require("./products.json");
const myModel = require("./schema/myschema");
const PORT = process.env.PORT || 4000;
const product_router = require("./routers/products");
const connectDB = require("./database/connect");
app.use(product_router);
const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    try {
      console.log(`The port is listening at address ${PORT}`);
    } catch (e) {
      console.log(e);
    }
  });
};
start();
