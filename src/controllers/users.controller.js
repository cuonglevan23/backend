const User = require("../models/users.model");
const mongoose = require("mongoose");

const userCtrl = {
  createUser: async (req, res) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      avatar,
      address,
    } = req.body;
    try {
      const existEmail = await User.findOne({ email });
      if (existEmail) {
        return res
          .status(400)
          .json({ success: false, msg: "Email đã được sử dụng!" });
      } else {
        const user = new User({
          email,
          firstName,
          lastName,
          password,
          phone_number: phoneNumber,
          avatar,
          address,
          role: 1,
        });
        await user.save();

        return res.status(200).json({ success: true, user });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  updateUser: async (req, res) => {
    const {
      email,
      password,
      name,
      avatar,
      role,
      position,
      gender,
      address,
      birthday,
      idDepartment,
    } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          email,
          password,
          name,
          avatar,
          role,
          position,
          gender,
          address,
          birthday,
          idDepartment,
        }
      );

      return res.status(200).json({ success: true, msg: "success" });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existEmail = await User.findOne({ email: email });
      if (!existEmail) {
        return res
          .status(400)
          .json({ success: false, msg: "Email chưa được đăng ký" });
      }
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({ success: false, msg: "Sai mật khẩu" });
      }
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
    }
  },
  adminSignIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existEmail = await User.findOne({ email: email });
      if (!existEmail) {
        return res
          .status(400)
          .json({ success: false, msg: "Email chưa được đăng ký" });
      }
      const user = await User.findOne({ email, password, role: 0 });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, msg: "Đăng nhập thất bại" });
      }
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
    }
  },
  allUser: async (req, res) => {
    try {
      const users = await User.find({}).select(
        "email firstName lastName role point"
      );
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  addPoint: async (req, res) => {
    try {
      const { id, point } = req.body;
      const currentPoint = await User.findById(id, "point -_id");
      const totalPoint = Number(point) + Number(currentPoint.point);
      const user = await User.findByIdAndUpdate(id, {
        point: totalPoint,
      });
      return res.status(200).json({ user, success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  decrementPoint: async (req, res) => {
    const { id, point } = req.body;
    try {
      const currentPoint = await User.findById(id, "point -_id");
      const totalPoint = Number(currentPoint.point) - Number(point);
      await User.findByIdAndUpdate(id, {
        point: totalPoint,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getUserNotAdmin: async (req, res) => {
    try {
      const users = await User.find({ role: 1 });
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  getPricebyId: async (req, res) => {
    const { id } = req.body;
    try {
      const user = await User.findOne({ _id: id });
      return res.status(200).json({ point: user.point });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  },
  showUserById: async (req, res) => {
    try {
      const data = await User.findOne(
        { _id: req.params.id },
        "email name avatar role gender address position password birthday"
      )
        .populate("idDepartment")
        .exec();
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  searchByEmail: async (req, res) => {
    try {
      const data = await User.find(
        {
          email: { $regex: req.params.q },
        },
        "email name avatar role gender address"
      ).exec();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  removeUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  getAdmin: async (req, res) => {
    try {
      const users = await User.find({ role: 0 });
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  },
  showUserBelongToDepartment: async (req, res) => {
    const q = req.params.departmentId;
    try {
      const data = await User.find({
        idDepartment: q,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showUserNotDepartment: async (req, res) => {
    try {
      const users = await User.find();
      if (users) {
        const data = users.filter((item) => !item.idDepartment);
        return res.status(200).json(data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  addUserDepartment: async (req, res) => {
    const idPerson = req.params.idPerson;
    const { idDepartment } = req.body;
    try {
      const updatedPost = await User.findOneAndUpdate(
        { _id: idPerson },
        {
          idDepartment,
        }
      );
      if (updatedPost) {
        res.status(200).json({ message: "Update successfully" });
      } else {
        console.log(updatedPost);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  removeUserBelongToDepartment: async (req, res) => {
    const id = req.params.deleteId;
    try {
      const updatedData = await User.findOneAndUpdate(
        { _id: id },
        {
          idDepartment: null,
        }
      );
      if (updatedData) {
        res.status(200).json({ message: "Update successfully" });
      } else {
        console.log(updatedData);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  searchEmailHasDepartment: async (req, res) => {
    const departmentId = req.params.departmentId;
    try {
      const data = await User.find(
        {
          email: { $regex: req.params.q },
          departmentId: departmentId,
        },
        "email name avatar role gender address position"
      ).exec();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  searchEmailHasNotDepartment: async (req, res) => {
    try {
      try {
        const users = await User.find({ email: { $regex: req.params.q } });
        if (users) {
          const data = users.filter((item) => !item.idDepartment);
          return res.status(200).json(data);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
};

module.exports = userCtrl;
