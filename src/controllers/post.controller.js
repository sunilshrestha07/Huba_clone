import {errorHandler} from '../utils/errorHandler.utils.js'
import cloudinary from '../utils/cloudinary.utils.js'
import Food from '../models/post.model.js'


export const postFood = async (req, res, next) => {
    try {
        // Verify user isAdmin
        if (req.user.id !== req.params.userId) {
            return next(errorHandler(401, "You are not allowed to post"));
        }
        
        // Check required fields
        const { name, category, description, price } = req.body;
        if (!name || !category || !description || !price) {
            return next(errorHandler(401, "All fields are required"));
        }

        let cloudinaryResponse;
        // Handle image upload to Cloudinary
        if (req.file) {
            cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
        }

        // Create new post
        const newPost = new Food({
            name,
            category,
            description,
            price,
            userId: req.params.userId,
            image: cloudinaryResponse ? cloudinaryResponse.secure_url : undefined
        });

        // Save new post
        await newPost.save();

        // Send success response
        res.status(200).json(newPost);
    } catch (error) {
        // Handle errors
        return next(errorHandler(500, 'Internal Server Error'));
    }
};


export const getAllFoods = async (req,res,next)=>{
    try {
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch (error) {
        return next(errorHandler(401,'Internal server error'))
    }
}