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
  Gear.create(req.body)
  .then(gear => {
    res.redirect('/gear/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gear')
  })
}

function show(req, res){
  Gear.findById(req.params.id)
  .then(gear => {
    res.render('gear/show')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gear')
  })
}

export {
  index,
  newGear as new,
  create,
  show
}