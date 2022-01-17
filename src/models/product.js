const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stocks: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = Product;
