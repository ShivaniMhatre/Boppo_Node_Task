import mongoose, { Schema } from "mongoose";
import slugify from "slugify";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    cateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    category: {
        type: String
    }
})



export default mongoose.model('product', productSchema)