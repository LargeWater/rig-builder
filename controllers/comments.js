import { Comment } from "../models/comment.js";

function newComment(req, res) {
  
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then(comment => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/comments')
  })
}

export {
  newComment as new,
  create
}