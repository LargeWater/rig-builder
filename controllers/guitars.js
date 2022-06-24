import { Gear } from '../models/gear.js'

function index(req, res) {
  Gear.find({})
  .then
}

function newGear(req, res) {
  Gear.find({})
  .then(gear => {
    res.render('gear/new', {
      title: 'Add Gear',
      guitars,
    })
  })
}

function create(req, res){
  Gear.create(req.body)
  .then(gear => {
    res.redirect('/gear/new')
  })
}

export {
  index,
  newGear as new,
  create
}