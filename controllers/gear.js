import { Gear } from '../models/gear.js'

function index(req, res) {
  Gear.find({})
  .populate('owner')
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
    res.redirect('/gear')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gear')
  })
}

function show(req, res){
  Gear.findById(req.params.id)
  .populate('owner')
  .then(gear => {
    res.render('gear/show', {
      gear,
      title: `${gear.owner.name}'s ${gear.model}`
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

function edit(req, res) {
  Gear.findById(req.params.id)
  .then(gear => {
    res.render("gear/edit", {
      gear,
      title: `Edit Your ${gear.model}`,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/gear')
  })
}

function update(req, res) {
  Gear.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(gear => {
    res.redirect(`/gear/${gear._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/gear')
  })
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
}

export {
  index,
  newGear as new,
  create,
  show,
  deleteGear as delete,
  edit,
  update
}