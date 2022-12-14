const mongoose = require("mongoose");
const teleServicesModel = mongoose.Schema({
  idServices: {
    type: mongoose.Types.ObjectId,
    ref: "teleCategory",
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("teleProduct", teleServicesModel);
