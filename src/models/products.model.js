const mongoose = require("mongoose");
const productModel = mongoose.Schema({
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
    type: String,
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
  isActive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("product", productModel);
