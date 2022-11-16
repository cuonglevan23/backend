import mongoose from "mongoose";

const schema = new mongoose.Schema({
    ProductId: {
        type: String,
        required: true 
    },
    UserId: {
        type: int,
        required: true 
    },
});

export const userproductomModel = mongoose.model('userproduct', schema);