import { Profile } from '../models/profile.js'

function index(req, res) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Profile.find(modelQuery)
  .sort("name")
  .then(profiles => {
    res.render("profiles/index", { 
      profiles: profiles, 
      name: req.query.name,
      user: req.user
    })
  })
  .catch(err => {
    if (err) return next(err)
  })
}


export {
  index
}