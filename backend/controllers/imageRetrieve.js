// // controllers/imageRetrieve.js
// const Image = require("../models/Image");

// // Controller for retrieving images
// const retrieveImage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const image = await Image.findById(id);

//     if (!image) {
//       return res.status(404).json({ error: "Image not found." });
//     }

//     // Send the image URL to the client
//     res.json({ imageUrl: image.imageUrl });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

// module.exports = { retrieveImage };
