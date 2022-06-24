import mongoose from 'mongoose'

const pedalSchema= new mongoose.Schema({
  company: String,
  model: String,
  color: String,
  year:{ type: Number, min: 1960 },
}, {
  timestamps: true
})

const Pedal = mongoose.model('Pedal', pedalSchema)

export {
  Pedal
}