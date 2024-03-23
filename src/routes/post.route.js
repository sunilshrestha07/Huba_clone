import express from 'express'
import { upload } from '../middlewares/multer.utils.js'
import { getAllFoods, postFood } from '../controllers/post.controller.js'
import { verifyToken } from '../utils/verifyuser.utils.js'

const router = express.Router()

router.post('/post/:userId',verifyToken,upload.single('image'),postFood)
router.get('/getallfoods',getAllFoods)


export default  router