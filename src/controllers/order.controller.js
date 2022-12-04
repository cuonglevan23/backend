const mongoose = require("mongoose");
const Order = require("../models/order.model");
const orderCtrl = {
  createOrder: async (req, res) => {
    const { idUser, idProduct, quantity } = req.body;

    const orderExist = await Order.findOne({ idUser, idProduct });

    try {
      if (orderExist) {
        const newQuantity = Number(orderExist.quantity) + Number(quantity);
        orderExist.quantity = newQuantity;
        await orderExist.save();
        return res.status(200).json({ success: true });
      } else {
        const order = new Order({
          idUser,
          idProduct,
          quantity,
        });
        await order.save();
        return res.status(200).json({ success: true });
      }
    } catch (error) {
      return res.status(200).json({ success: false });
    }
  },
  getOrder: async (req, res) => {
    const id = req.params.id;
    try {
      const orders = await Order.find({ idUser: id, isPay: false }).populate(
        "idProduct"
      );
      return res.status(200).json({ orders });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  payOrder: async (req, res) => {
    const { id } = req.body;
    try {
      const order = await Order.findOne({ _id: id });
      order.isPay = true;
      await order.save();
    } catch (error) {}
  },
  getOrderisPay: async (req, res) => {
    const { id } = req.body;
    try {
      const orders = await Order.find({ _id: id, isPay: true }).populate(
        "idProduct"
      );
      return res.status(200).json({ orders });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  deleteOrder: async (req, res) => {
    const id = req.params.id;
    try {
      const order = await Order.findOneAndDelete({ _id: id });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = orderCtrl;
