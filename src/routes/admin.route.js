import express from 'express'
import { allUser } from '../controllers/admin.controller.js'

const router = express.Router()

router.get('/alluser',allUser)

export default router