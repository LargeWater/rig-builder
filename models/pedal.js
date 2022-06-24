import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pedalSchema = new Schema({
  company: String,
  model: String,
  effect: String,
  year:{ type: Number, min: 1960 },
}, {
  timestamps: true
})

const Pedal = mongoose.model('Pedal', pedalSchema)

export {
  Pedal
}