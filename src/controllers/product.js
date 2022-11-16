import { productModel } from "../models/productModel";

export const getProduct = async (req, res) => {
    try {
        const products =await productModel.find();
        console.log('products', products);
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};

export const createProducts = async (req, res) => {
    try {
        const newProducts = req.body;

        const product = new productModel(newProducts);
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: err});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updateProduct = req.body;

        const product = await productModel.findByIdAndUpdate({ _id: updateProduct._id }, updateProduct, {new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: err});
    }
};