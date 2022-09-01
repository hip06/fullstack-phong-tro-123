import express from 'express'
import * as controllers from '../controllers/area'
// CRUD
const router = express.Router()

router.get('/all', controllers.getAreas)

export default router