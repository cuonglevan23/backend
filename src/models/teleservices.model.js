const mongoose = require("mongoose");
const teleServicesModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  },
  ratio: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  valueName: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("teleCategory", teleServicesModel);
