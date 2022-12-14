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

  //0:waitting
  //1:acpeted
  //2:denied
  isAccept: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("order", orderModel);
