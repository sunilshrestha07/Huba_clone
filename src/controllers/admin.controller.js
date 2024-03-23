import {errorHandler} from '../utils/errorHandler.utils.js'
import User from '../models/user.model.js'

export const allUser = async(req,res,next)=>{
    try {
        const alluser = await User.find()
        res.status(200).json(alluser)
    } catch (error) {
        return next(errorHandler(401,"Error getting users"))
    }
}

