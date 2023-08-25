const mongoose = require("mongoose")
const Schema = mongoose.Schema


// Create a schema for blog posts
const BlogSchema = new Schema({
    topic: String,
    content: String,
    author: String,
    date: Date,
    imageData: Buffer,
    imageContentType: String,
  }, {
    collection: "blogs"
  }
  );

 const BlogModel = mongoose.model("Blog",   BlogSchema)

module.exports =    BlogModel