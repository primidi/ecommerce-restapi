const router = require("express").Router();
const { getProduct, getProductById, addProduct, updateProduct, deleteProduct } = require("../controllers/product-controller");

// Get all the products
router.get("/", getProduct);

// Get specific product by its id
router.get("/:id", getProductById);

// Add new product
router.post("/", addProduct);

// Update product by its id
router.put("/:id", updateProduct);

// Delete product by its id
router.delete("/:id", deleteProduct);

module.exports = router;
