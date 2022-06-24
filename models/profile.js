import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  guitars: [{type: Schema.Types.ObjectId, ref: 'Guitar'}],
  pedals: [{type: Schema.Types.ObjectId, ref: 'Pedal'}],
  amps: [{type: Schema.Types.ObjectId, ref: 'Amp'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
