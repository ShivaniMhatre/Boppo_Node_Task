import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
import slug from "slugify";

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
    },
    slug:{
        type:String,
        unique:true
    }
})

productSchema.pre('save',function(next){
    this.slug=slugify(this.title,{lower:true,remove:/[*+-.()'"!:@]/g});
    next();
})

export default mongoose.model('product', productSchema)