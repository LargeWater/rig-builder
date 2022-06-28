import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  content: String,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  }
}, {
  timestamps: true,
})

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}