import { telecomModel } from "../models/telecomModel";

export const getTelecom = async (req, res) => {
    try {
        const telecom =await telecomModel.find();
        console.log('telecom', telecom);
        res.status(200).json({telecom});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};
