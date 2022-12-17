const router = require("express").Router();
const orderCtrl = require("../controllers/order.controller");
router.post("/create-order", orderCtrl.createOrder);
router.post("/isPay", orderCtrl.payOrder);
router.post("/send-mail", orderCtrl.sendMail);
router.post("/incre-quantity", orderCtrl.addQuantity);
router.post("/decre-quantity", orderCtrl.decreQuantity);
router.post("/order-ispay", orderCtrl.getOrderisPay);
router.post("/history", orderCtrl.getHistoryOrder);
router.post("/order-point-accept", orderCtrl.getOrderPointAccept);
router.get("/admin-getorder", orderCtrl.getOrderWait);
router.post("/accept-order", orderCtrl.acceptOrder);
router.get("/:id", orderCtrl.getOrderbyPrice);
router.post("/order-by-point", orderCtrl.getOrderbyPoint);
router.delete("/:id", orderCtrl.deleteOrder);
router.post("/deny-order", orderCtrl.acceptOrder)
module.exports = router;
