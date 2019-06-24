import { Router } from 'express'
import { apiController } from '../controllers/api.controller'

const apiRouter = Router()
apiRouter.get('/', apiController)

export { apiRouter }

