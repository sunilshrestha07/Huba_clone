import express from "express";
import { googleLogin, login, logout, signup, test, userDelete, userUpdate } from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyuser.utils.js'
import {upload} from '../middlewares/multer.utils.js'

const router = express.Router()

router.get('/user/test',test)
router.post('/user/signup',signup)
router.post('/user/login',login)
router.post('/user/google',googleLogin)
router.put('/update/:userId',verifyToken,upload.single('profilePicture'),userUpdate)
router.delete('/delete/:userId',verifyToken,userDelete)
router.post('/logout',logout)

export default router