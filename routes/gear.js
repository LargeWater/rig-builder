import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gearCtrl from '../controllers/gear.js'

const router = Router()

router.get('/', gearCtrl.index)
router.get('/new', isLoggedIn, gearCtrl.new)
router.get('/:id', gearCtrl.show)
router.post('/', isLoggedIn, gearCtrl.create)

export {
  router
}
