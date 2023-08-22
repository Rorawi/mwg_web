const express = require("express");
const {
  listBlogController,
  createBlogController,
  getAllBlog
} = require("../controllers/blog");
const router = express.Router();

router.post("/api/posts", createBlogController);

router.get("/api/posts/:id", listBlogController);
router.get("/api/posts/",getAllBlog );

module.exports = router;