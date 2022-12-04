const router = require("express").Router();
const productCtrl = require("../controllers/products.controller");

router.post("/create-product", productCtrl.createProduct);
router.get("/get-all", productCtrl.getAllProducts);
router.delete("/:id", productCtrl.deletProduct);
router.put("/:id", productCtrl.updateProduct);
router.get("/:id", productCtrl.getProductbyId);

module.exports = router;
