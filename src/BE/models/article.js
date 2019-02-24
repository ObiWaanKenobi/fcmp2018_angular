const mongoose = require('mongoose');

const Article = mongoose.model('Articles', {
  title: String,
  content: String,
  description: String,
  urlToImage: String,
  publishedAt: String,
  author: String,
  source: String,
  isCustom: Boolean,
});

module.exports = Article;
