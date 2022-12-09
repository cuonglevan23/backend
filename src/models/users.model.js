const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: false,
    },
    lastName: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: [true, "Please enter name"],
    },
    email: {
      type: String,
      require: [true, "Please enter name"],
    },
    // coder, projectManager, leader, admin
    role: {
      type: Number,
      require: false,
      default: 1,
    },

    address: {
      type: String,
      require: false,
    },
    phone_number: {
      type: String,
      require: true,
    },
    point: {
      type: Number,
      default: 1000,
    },
    avatar: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
