const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_date: { type: Date },
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
