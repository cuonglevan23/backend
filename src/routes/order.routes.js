const router = require("express").Router();
const orderCtrl = require("../controllers/order.controller");
router.post("/create-order", orderCtrl.createOrder);
router.post("/isPay", orderCtrl.createOrder);
router.post("/order-ispay", orderCtrl.getOrderisPay)
router.get("/:id", orderCtrl.getOrder);
router.delete("/:id", orderCtrl.deleteOrder);
module.exports = router;
