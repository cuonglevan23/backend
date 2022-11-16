import { categoryModel } from "../models/categoryModel";

export const getCategory = async (req, res) => {
    try {
        const category =await categoryModel.find();
        console.log('category', category);
        res.status(200).json({category});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};
