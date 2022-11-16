import { userproductomModel } from "../models/userproductModel";

export const getUserProduct = async (req, res) => {
    try {
        const UserProduct =await userproductomModel.find();
        console.log('UserProduct', UserProduct);
        res.status(200).json({UserProduct});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};
