import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gearSchema = new Schema({
  type: String,
  company: String,
  model: String,
  color: String,
}, {
  timestamps: true
})

const Gear = mongoose.model('Gear', gearSchema)

export {
  Gear
}