import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  gear: {type: Schema.Types.ObjectId, ref: "Gear"},
  comments: {type: Schema.Types.ObjectId, ref: "Comment"}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
