import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'
// import * as commentsCtrl from '../controllers/comments.js'

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', profilesCtrl.show)
// router.post('/', commentsCtrl.create)


export {
  router
}