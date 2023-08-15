const blogModel = require("../models/payment");

const listBlogController = async (req, res) => {
  const post = await blogModel.findById(req.params.id);
  res.json(post);
};

const createBlogController = async (req, res) => {
  const posts = await blogModel.find();
  res.json(posts);
};

module.exports = {
    listBlogController,
    createBlogController
}
