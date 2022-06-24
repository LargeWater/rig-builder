import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ampSchema = new Schema({
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