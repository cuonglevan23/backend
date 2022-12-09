const mongoose = require("mongoose");
const Order = require("../models/order.model");
const orderCtrl = {
  createOrder: async (req, res) => {
    const { idUser, idProduct, quantity, byPoint } = req.body;

    const orderExist = await Order.findOne({ idUser, idProduct, isPay: false });

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
          byPoint,
        });
        await order.save();
        return res.status(200).json({ success: true });
      }
    } catch (error) {
      return res.status(200).json({ success: false });
    }
  },
  getOrderbyPrice: async (req, res) => {
    const id = req.params.id;
    try {
      const orders = await Order.find({
        idUser: id,
        isPay: false,
        byPoint: false,
      }).populate("idProduct");
      return res.status(200).json({ orders });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getOrderbyPoint: async (req, res) => {
    const { id } = req.body;
    try {
      const orders = await Order.find({
        idUser: id,
        isPay: false,
        byPoint: true,
      }).populate("idProduct");
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
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
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
  getOrderPointAccept: async (req, res) => {
    const { id } = req.body;
    try {
      const orders = await Order.find({
        idUser: id,
        byPoint: true,
        isPay: true,
        isAccept: true,
      }).populate("idProduct");
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
  acceptOrder: async (req, res) => {
    const { id } = req.body;
    try {
      const order = await Order.findOne({ _id: id });
      order.isAccept = true;
      await order.save();
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getOrderWait: async (req, res) => {
    try {
      const orders = await Order.find({
        isPay: true,
        isAccept: false,
      }).populate("idProduct");
      return res.status(200).json({ orders });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = orderCtrl;
