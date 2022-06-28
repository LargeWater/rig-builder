import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as commentsCtrl from '../controllers/comments.js'

const router = Router()

router.get('/new', isLoggedIn, commentsCtrl.new)
router.post('/', isLoggedIn, commentsCtrl.create) 

export {
  router
}