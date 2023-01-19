const myModel = require("../schema/myschema");
const getAllProducts = async (req, res) => {
  try {
    res.send("Hello this is me");
  } catch (e) {
    console.log(e);
  }
};
const getAllProductsTest = async (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is Json" });
  } catch (e) {
    console.log(e);
  }
};
const getJson = async (req, res) => {
  try {
    const { name, company, feature, sort, select } = req.query;
    const queryObj = {};
    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }
    if (company) {
      queryObj.company = company;
    }
    if (feature) {
      queryObj.feature = feature;
    }
    let ResultApi = myModel.find(queryObj);
    if (sort) {
      const sortFix = sort.replace(",", " ");
      ResultApi = ResultApi.sort(sortFix);
    }
    if (select) {
      const selectFix = select.replaceAll(",", " ");
      ResultApi = ResultApi.select(selectFix);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    ResultApi = ResultApi.skip(skip).limit(limit);
    const result = await ResultApi;
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};
module.exports = { getAllProducts, getAllProductsTest, getJson };
