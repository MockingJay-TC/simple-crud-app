const express = require("express");
const router = express.Router();
const {
  getproducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// get all products route
router.get("/", getproducts);

// get product by Id route
router.get("/:id", getProductById);

// add a new product
router.post("/", addProduct);

// updae a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;