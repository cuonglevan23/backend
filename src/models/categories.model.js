const mongoose = require("mongoose");
const categoriesModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("categoies", categoriesModel);
