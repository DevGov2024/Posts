const Post = require('../models/Post');

exports.getAll = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.getById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

exports.create = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

exports.update = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(post);
};

exports.remove = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

exports.search = async (req, res) => {
  const term = req.query.term;
  const posts = await Post.find({
    $or: [
      { title: new RegExp(term, 'i') },
      { content: new RegExp(term, 'i') }
    ]
  });
  res.json(posts);
};
