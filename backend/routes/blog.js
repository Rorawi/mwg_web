const express = require("express");
const {
  listBlogController,
  createBlogController,
} = require("../controllers/payment");
const router = express.Router();

router.get("/api/posts", createBlogController);

router.get("/api/posts/:id", listBlogController);

module.exports = router;