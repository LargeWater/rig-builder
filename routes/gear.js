import { Router } from 'express'
import * as gearCtrl from '../controllers/gear.js'

const router = Router()

router.get('/', gearCtrl.index)
router.get('/new', gearCtrl.new)
router.post('/', gearCtrl.create)

export {
  router
}
