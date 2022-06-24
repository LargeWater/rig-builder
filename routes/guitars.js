import { Router } from 'express'
import * as guitarsCtrl from '../controllers/guitars.js'

const router = Router()

router.get('/', guitarsCtrl.index)

export {
  router
}
