const Category = require("../models/categories.model");
const categoryCtrl = {
  getAllCategory: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const category = new Category({ name });
      await category.save();
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  deleteCategory: async (req, res) => {
    const id = req.params.id;
    try {
      const category = Category.findOneAndDelete({ _id: id });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  
};
module.exports = categoryCtrl;
