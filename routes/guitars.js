import { Router } from 'express'
import * as guitarsCtrl from '../controllers/guitars.js'

const router = Router()

router.get('/', guitarsCtrl.index)
router.get('/new', guitarsCtrl.new)
router.post('/', guitarsCtrl.create)

export {
  router
}
