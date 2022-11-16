import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
    UserId: {
        type: int,
        required: true 
    },
    Exchange: {
        type: String,
        required: true 
    },
    Point: {
        type: int,
        required: true 
    },
});

export const telecomModel = mongoose.model('telecom', schema);