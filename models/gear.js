import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gearSchema = new Schema({
  type: String,
  company: String,
  model: String,
  color: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Gear = mongoose.model('Gear', gearSchema)

export {
  Gear
}