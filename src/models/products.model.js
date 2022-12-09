const mongoose = require("mongoose");
const productModel = mongoose.Schema({
  categoryId: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "categories",
  },
  name: {
    type: String,
    require: true,
  },
  imgProduct: {
    type: String,
    require: true,
  },
  imgInvoled: {
    type: Array,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },

  introduction: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  byPoint: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("product", productModel);
