import { Profile } from '../models/profile.js'

function index(req, res) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  Profile.find(modelQuery)
  .sort("name")
  .then(profiles => {
    res.render("profiles/index", { 
      profiles: profiles, 
      name: req.query.name,
    })
  })
  .catch(err => {
    if (err) return next(err)
  })
}


export {
  index,
}