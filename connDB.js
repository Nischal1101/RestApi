const connectDB = require("./database/connect");
const productJson = require("./products.json");
const myModel = require("./schema/myschema");
const start = async () => {
  try {
    await connectDB();
    const result = await myModel.create(productJson);
    console.log(result);
    console.log("success!!!");
  } catch (e) {
    console.log(e);
  }
};
start();
