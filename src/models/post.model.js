import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type:String,
        default:"https://i.pinimg.com/564x/47/29/bc/4729bc51a0574c79f0feca7db7c04da2.jpg"
    },
    userId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default: 1
    }
},{timestamps:true})

const Food = mongoose.model('Food',foodSchema)
export default Food