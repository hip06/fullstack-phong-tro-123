import express from 'express'
import * as controllers from '../controllers/category'

const router = express.Router()

router.get('/all', controllers.getCategories)

export default router