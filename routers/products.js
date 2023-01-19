const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsTest,
  getJson,
} = require("../controllers/products");
router.route("/").get(getAllProducts);
router.route("/product").get(getAllProductsTest);
router.route("/json").get(getJson);
module.exports = router;
