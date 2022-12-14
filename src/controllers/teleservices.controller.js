const TeleServices = require("../models/teleservices.model");
const mongoose = require("mongoose");

const teleCtrl = {
  createTele: async (req, res) => {
    const { name, icon, ratio, description } = req.body;
    try {
      const tele = new TeleServices({
        name,
        icon,
        ratio,
        description,
        valueName,
      });
      await tele.save();
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(200).json({ success: false });
    }
  },
  getAllteleServices: async (req, res) => {
    try {
      const teles = await TeleServices.find({});
      return res.status(200).json({ teles });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ success: false });
    }
  },
  updateTeleServices: async (req, res) => {
    const id = req.params.id;
    const { name, icon, ratio, description, valueName } = req.body;
    try {
      const teleservices = await TeleServices.findOneAndUpdate(
        { _id: id },
        {
          name,
          icon,
          ratio,
          description,
          valueName,
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
      await TeleServices.findOneAndDelete({ _id: id });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getTeleServicesById: async (req, res) => {
    const id = req.params.id;
    try {
      const teleservice = await TeleServices.findById(id);
      return res.status(200).json({ teleservice });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  },
};
module.exports = teleCtrl;
