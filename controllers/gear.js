import { Gear } from '../models/gear.js'

function index(req, res) {
  Gear.find({})
  .then(gear => {
    res.render('gear/index', {
      gear,
      title: "All Gear"
    })
  })
}

function newGear(req, res) {
  Gear.find({})
  .then(gear => {
    res.render('gear/new', {
      title: 'Add Gear',
      gear,
    })
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
  Gear.create(req.body)
  .then(gear => {
    res.redirect('/gear/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gear')
  })
}

function show(req, res){
  Gear.findById(req.params.id)
  .then(gear => {
    res.render('gear/show', {
      gear,
      title: `${gear.company} ${gear.model}`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gear')
  })
}

function deleteGear(req, res) {
  Gear.findById(req.params.id)
  .then(gear => {
    if(gear.owner?.equals(req.user.profile._id)) {
      gear.delete()
      .then(() => {
        res.redirect('/gear')
      })
    } else {
      throw new Error ('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/gear")
  })
}

export {
  index,
  newGear as new,
  create,
  show,
  deleteGear as delete
}