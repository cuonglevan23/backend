const mongoose = require("mongoose");
const orderModel = mongoose.Schema({
  idUser: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "user",
  },
  idProduct: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "product",
  },
  quantity: {
    type: Number,
    require: true,
    default: false,
  },
  byPoint: {
    type: Boolean,
    require: true,
  },
  isPay: {
    type: Boolean,
    default: false,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("order", orderModel);
