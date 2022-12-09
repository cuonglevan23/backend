const Product = require("../models/products.model");
const mongoose = require("mongoose");
const productCtrl = {
  createProduct: async (req, res) => {
    const {
      name,
      imgProduct,
      // imgInvoled,
      price,
      introduction,
      description,
      quantity,
      byPoint,
      isActive,
      categoryId,
    } = req.body;
    try {
      const product = new Product({
        name,
        imgProduct,
        // imgInvoled,
        price,
        quantity,
        introduction,
        description,
        byPoint,
        categoryId,
        isActive,
      });
      await product.save();
      return res.status(200).json({ product });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find({});
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ sucess: false });
    }
  },
  getAllProductsbyPrice: async (req, res) => {
    try {
      const products = await Product.find({ byPoint: false }).limit(9);
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ sucess: false });
    }
  },
  filterProduct: async (req, res) => {
    const { name, price, categoryId, sort } = req.body;
    let products;
    try {
      if (!categoryId) {
        if (sort === "new") {
          nameCheck = name;
          products = await Product.find({
            byPoint: false,
            name: { $regex: name, $options: "i" },
            price: { $gte: price },
          }).limit(9);
        } else if (sort === "price-desc") {
          console.log("without desc");
          products = await Product.find({
            byPoint: false,
            name: { $regex: name },
            price: { $gte: price },
          })
            .sort({ price: -1 })
            .limit(9);
        } else {
          console.log("without esc");
          products = await Product.find({
            name: { $regex: name },
            byPoint: false,
            price: { $gte: price },
          })
            .sort({ price: 1 })
            .limit(9);
        }
      } else {
        if (sort === "new") {
          console.log("without new");
          products = await Product.find({
            name: { $regex: name },
            byPoint: false,
            price: { $gte: price },
            categoryId,
          }).limit(9);
        } else if (sort === "price-desc") {
          console.log("without desc");
          products = await Product.find({
            byPoint: false,
            name: { $regex: name },
            price: { $gte: price },
            categoryId,
          })
            .sort({ price: -1 })
            .limit(9);
        } else {
          console.log("without esc");
          products = await Product.find({
            name: { $regex: name },
            byPoint: false,
            price: { $gte: price },
            categoryId,
          })
            .sort({ price: 1 })
            .limit(9);
        }
      }

      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ sucess: false, error });
    }
  },
  getProductbyPrice: async (req, res) => {
    const { price } = req.body;
    try {
    } catch (error) {}
  },
  getProductbyPoint: async (req, res) => {
    try {
      const products = await Product.find({ byPoint: true }).limit(9);
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ sucess: false });
    }
  },
  findByName: async (req, res) => {
    const { name, sort } = req.body;
    try {
      const products = await Product.find({ byPoint: false, name }).limit(9);
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  findByPrice: async (req, res) => {
    const { price } = req.body;
    try {
      const products = await Product.find({ byPoint: false }).limit(9);
    } catch (error) {}
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
      byPoint,
      categoryId,
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
          byPoint,
          categoryId,
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
  getProductsByCategory: async (req, res) => {
    const { categoryId, byPoint } = req.body;
    try {
      const products = await Product.find({ categoryId, byPoint });
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = productCtrl;
