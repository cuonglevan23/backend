const router = require("express").Router();
const teleCtrl = require("../controllers/teleservices.controller");
router.get("/get-all", teleCtrl.getAllteleServices);
router.post("/create", teleCtrl.createTele);
router.put("/:id", teleCtrl.updateTeleServices);
router.delete("/:id", teleCtrl.deleteServices);
router.get("/:id", teleCtrl.getTeleServicesById);
module.exports = router;
