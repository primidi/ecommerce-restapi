const mongoose = require("mongoose");
const Product = require("../models/product");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
