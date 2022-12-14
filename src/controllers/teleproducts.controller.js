const TeleProduct = require("../models/teleproduct.model");
const mongoose = require("mongoose");

const teleCtrl = {
  createTele: async (req, res) => {
    const { price, image, idServices } = req.body;
    try {
      const tele = new TeleProduct({
        price,
        image,
        idServices,
      });
      await tele.save();
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(200).json({ success: false });
    }
  },
  getAllteleProduct: async (req, res) => {
    try {
      const teles = await TeleProduct.find({});
      return res.status(200).json({ teles });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  },
  getTeleProductByServices: async (req, res) => {
    const id = req.body.id;
    try {
      const teles = await TeleProduct.find({ idServices: id }).populate(
        "idServices"
      );
      return res.status(200).json({ teles });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  updateTeleProduct: async (req, res) => {
    const id = req.params.id;
    const { image, price, idServices } = req.body;
    try {
      await TeleProduct.findOneAndUpdate(
        { _id: id },
        {
          image,
          price,
          idServices,
        }
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  deleteServices: async (req, res) => {
    const id = req.params.id;
    try {
      await TeleProduct.findOneAndDelete({ _id: id });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getTeleProductById: async (req, res) => {
    const id = req.params.id;
    try {
      const teleservice = await TeleProduct.findById(id);
      return res.status(200).json({ teleservice });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = teleCtrl;
