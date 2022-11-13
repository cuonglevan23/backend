import { userModel } from "../models/userModel";

export const getUsers = async (req, res) => {
    try {
        const users =await UserModel.find();
        console.log('users', users);
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};

export const createUsers = async (req, res) => {
    try {
        const newUser = req.body;

        const user = new userModel(newUser);
        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: err});
    }
};

export const updateUser = async (req, res) => {
    try {
        const updateUser = req.body;

        const user = await userModel.findByIdAndUpdate({ _id: updateUser._id }, updateUser, {new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: err});
    }
};