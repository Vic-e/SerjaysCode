const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  parentName: {type: String, required: true},
  contactNumber: {type: String, required: true},
  contactEmail: {type: String, required: true},
  numberOfChildren: {type: Number, required: true},
  ageOfChildren: {type: String, required: true},
  date: {type: Date, required: true},
  location: {type: String, required: true}
},
{
  timestamps: true
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post
