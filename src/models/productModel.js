import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
    Decription: {
        type: String,
        required: true 
    },
    UrlImage: {
        type: String,
        required: true 
    },
    SubDecription: {
        type: String,
        required: true 
    },
    Price: {
        type: int,
        required: true 
    },
    ReducedPrice: {
        type: int,
        required: true 
    },
    Total: {
        type: Int,
        required: true 
    },
    CategoryId: {
        type: int,
        required: true 
    },
    Status: {
        type: String,
        required: true 
    },
    IsDelete: {
        type: String,
        required: true 
    },
    Point: {
        type: intg,
        required: true 
    },
    DateExpired: {
        type: String,
        required: true 
    },
    PricePercent: {
        type: int,
        required: true 
    },
});

export const productModel = mongoose.model('product', schema);