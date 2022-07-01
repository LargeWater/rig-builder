import { Comment } from "../models/comment.js";
import { Profile } from "../models/profile.js";


function create(req, res) {
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then(comment => {
    Profile.findById(req.user.profile._id)
    .then(profile =>{
      profile.comments.push(comment._id)
      profile.save()
      .then(() =>{
        res.redirect(`/profiles/${profile._id}`)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  create
}