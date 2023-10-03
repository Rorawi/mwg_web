const blogModel = require("../models/blog");
const multer = require("multer")



const getAllBlog = async (req, res) => {
  try {
    const allPost = await blogModel
      .aggregate([{ $sample: { size: 50 } }])
      .exec();
    res.json(allPost);
  } catch (err) {
    res.send(err);
  }
};

const listBlogController = async (req, res) => {
  try {
    const post = await blogModel.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.send(err);
  }
};

const createBlogController = async (req, res) => {
  // const posts = await blogModel.find();
  // res.json(posts);
  try {
    const posts = new blogModel(req.body);
    const savePost = await posts.save();
    res.json(savePost);
  } catch (err) {
    res.send(err);
  }
};

const createBlog = async (req, res) => {
  try {
    const { topic, content, author, date } = req.body;
    const imageData = req.file.buffer;
    const imageContentType = req.file.mimetype;

    // Create a new blog post with image data
    const newBlog = new blogModel({
      topic,
      content,
      author,
      date,
      imageData,
      imageContentType,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    return res.send(res)
  }
};

module.exports = {
  listBlogController,
  getAllBlog,
  createBlogController,
  createBlog
};
