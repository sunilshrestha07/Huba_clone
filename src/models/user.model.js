import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    profilePicture:{
        type: String,
        default:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1710129573~exp=1710130173~hmac=3efd8095670f4a6be47c3344058cd15dc1818f3fe4f541fe49568e18e8c2ef59"
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User