// // controllers/imageUpload.js
// const multer = require("multer");
// const Image = require("../models/Image");

// // Set up multer for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads"); // Create an "uploads" folder in your project directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Controller for image upload
// const uploadImage = async (req, res) => {
//   try {
//     const { title } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ error: "No image file provided." });
//     }

//     const imageUrl = req.file.path; // Store the file path in the database

//     const newImage = new Image({ title, imageUrl });
//     await newImage.save();

//     res.status(201).json({ message: "Image uploaded successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

// module.exports = { uploadImage, upload };
