import { rolesModel } from "../models/rolesModel";

export const getRoles = async (req, res) => {
    try {
        const roles =await rolesModel.find();
        console.log('roles', roles);
        res.status(200).json({roles});
    } catch (error) {
        res.status(500).json({ error: err});
    }
};
