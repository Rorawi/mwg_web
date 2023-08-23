// models/Image.js
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: String,
  imageUrl: String, // Store the image file path or URL here
});

module.exports = mongoose.model("Image", imageSchema);
