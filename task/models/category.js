import mongoose,{Schema} from "mongoose";

const cateSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
})

export default mongoose.model('category',cateSchema)