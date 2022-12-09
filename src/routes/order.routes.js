const router = require("express").Router();
const orderCtrl = require("../controllers/order.controller");
router.post("/create-order", orderCtrl.createOrder);
router.post("/isPay", orderCtrl.payOrder);
router.post("/order-ispay", orderCtrl.getOrderisPay);
router.post("/order-point-accept",orderCtrl.getOrderPointAccept)
router.get("/admin-getorder", orderCtrl.getOrderWait);
router.post("/accept-order", orderCtrl.acceptOrder);
router.get("/:id", orderCtrl.getOrderbyPrice);
router.post("/order-by-point", orderCtrl.getOrderbyPoint);
router.delete("/:id", orderCtrl.deleteOrder);
module.exports = router;
