const Product = require("../models/product");

// Get all the products
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get the specific product by its id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// Add new product
const addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const insertProduct = await Product.insertMany(product);
    res.status(201).json(insertProduct);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update a product by its id
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      message: "Product's not found!",
    });
  }
  try {
    const newProduct = await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          product_name: req.body.product_name,
          price: req.body.price,
          stocks: req.body.stocks,
          description: req.body.description,
        },
      }
    );
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product by its id
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product's that want to delete is not found!" });
  }
  try {
    const removeProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(removeProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProduct, getProductById, addProduct, updateProduct, deleteProduct };
