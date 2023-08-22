const blogModel = require("../models/blog");

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

module.exports = {
  listBlogController,
  getAllBlog,
  createBlogController,
};
