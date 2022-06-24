import mongoose from 'mongoose'

const guitarSchema= new mongoose.Schema({
  company: String,
  model: String,
  color: String,
  year:{ type: Number, min: 1960 },
}, {
  timestamps: true
})

const Guitar = mongoose.model('Guitar', guitarSchema)

export {
  Guitar
}