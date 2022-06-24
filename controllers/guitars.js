import { Guitar } from '../models/guitar.js'

function index(req, res) {

}

function newGuitar(req, res) {
  Guitar.find({})
  .then(guitars => {
    res.render('guitars/new', {
      title: 'Add Guitar',
      guitars
    })
  })
}

function create(req, res){
  Guitar.create(req.body)
  .then(guitar => {
    res.redirect('/guitars/new')
  })
}

export {
  index,
  newGuitar as new,
  create
}