import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gearSchema = new Schema({
  type: String,
  company: String,
  model: String,
  color: String,
  year:{ type: Number, min: 1960 },
}, {
  timestamps: true
})

const Gear = mongoose.model('Guitar', guitarSchema)

export {
  Gear
}