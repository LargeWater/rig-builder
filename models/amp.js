import mongoose from 'mongoose'

const ampSchema= new mongoose.Schema({
  company: String,
  model: String,
  year:{ type: Number, min: 1960 },
}, {
  timestamps: true
})

const Amp = mongoose.model('Amp', ampSchema)

export {
  Amp
}