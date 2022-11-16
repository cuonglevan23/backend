import mongoose from "mongoose";

const schema = new mongoose.Schema({
    RoleName: {
        type: String,
        required: true 
    },
    Description: {
        type: String,
        required: true 
    },
});

export const rolesModel = mongoose.model('roles', schema);