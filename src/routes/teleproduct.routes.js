const router = require("express").Router();
const teleCtrl = require("../controllers/teleproducts.controller");
router.get("/get-all", teleCtrl.getAllteleProduct);
router.post("/create", teleCtrl.createTele);
router.post("/get-by-id-services", teleCtrl.getTeleProductByServices);
router.put("/:id", teleCtrl.updateTeleProduct);
router.delete("/:id", teleCtrl.deleteServices);
router.get("/:id", teleCtrl.getTeleProductById);
module.exports = router;
