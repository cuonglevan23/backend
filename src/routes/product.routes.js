const router = require("express").Router();
const productCtrl = require("../controllers/products.controller");

router.post("/create-product", productCtrl.createProduct);
router.post("/get-by-price", productCtrl.getAllProductsbyPrice);
router.post("/filter-by-price", productCtrl.filterProduct);
router.get("/get-by-point", productCtrl.getProductbyPoint);
router.post("/get-by-category", productCtrl.getProductsByCategory);
router.get("/get-all", productCtrl.getAllProduct);
router.delete("/:id", productCtrl.deletProduct);
router.put("/:id", productCtrl.updateProduct);
router.get("/:id", productCtrl.getProductbyId);
router.get("/:categoryId", productCtrl.getProductsByCategory);

module.exports = router;
