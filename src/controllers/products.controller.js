const Product = require("../models/products.model");
const mongoose = require("mongoose");
const productCtrl = {
  createProduct: async (req, res) => {
    const {
      name,
      imgProduct,
      imgInvoled,
      price,
      introduction,
      description,
      quantity,
    } = req.body;
    try {
      const product = new Product({
        name,
        imgProduct,
        imgInvoled,
        price,
        quantity,
        introduction,
        description,
      });
      await product.save();
      return res.status(200).json({ product });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ sucess: false });
    }
  },
  deletProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findByIdAndDelete(id);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  updateProduct: async (req, res) => {
    const id = req.params.id;
    const {
      name,
      price,
      introduction,
      description,
      quantity,
      imgProduct,
      imgInvoled,
    } = req.body;
    // console.log(req.body);
    try {
      const product = await Product.findOneAndUpdate(
        { _id: id },
        {
          name,
          price,
          introduction,
          description,
          quantity,
          imgProduct,
          imgInvoled,
        }
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ err: error });
    }
  },
  getProductbyId: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      return res.status(200).json({ product, msg: "success" });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = productCtrl;
