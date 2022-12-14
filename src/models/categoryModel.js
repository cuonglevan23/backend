import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
    ParentId: {
        type: int,
        required: true 
    },
    IsDeleted   : {
        type: String,
        required: true 
    },
});

export const categoryModel = mongoose.model('category', schema);