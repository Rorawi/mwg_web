const express = require("express");
const multer = require("multer")
const {
  listBlogController,
  createBlogController,
  getAllBlog,
  createBlog
} = require("../controllers/blog");
const router = express.Router();



// Configure multer for handling image uploads
// const storage = multer.memoryStorage(); // Store the image data in memory
// const upload = multer({ storage: storage });




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null,uniqueSuffix+ file.originalname)
  }
})

const upload = multer({ storage: storage })
// Create a new blog post with an image
router.post("/api/posts", upload.single("image"), createBlog);
router.post("/api/posts", upload.array("image", 12), createBlog);

// router.post("/api/posts", createBlogController);

router.get("/api/posts/:id", listBlogController);
router.get("/api/posts/",getAllBlog );




module.exports = router;