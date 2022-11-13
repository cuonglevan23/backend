import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
    Phone: {
        type: String,
        required: true 
    },
    Address: {
        type: String,
        required: true 
    },
    City: {
        type: String,
        required: true 
    },
    TotalPoint: {
        type: String,
        required: true 
    },
    Avarta: {
        type: String,
        required: true 
    },
    Status: {
        type: Int,
        required: true 
    },
    UserName: {
        type: String,
        required: true 
    },
    PassWord: {
        type: String,
        required: true 
    },
    IsDelete: {
        type: String,
        required: true 
    },
});

export const userModel = mongoose.model('users', schema);