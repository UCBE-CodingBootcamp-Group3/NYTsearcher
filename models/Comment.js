const mongoose = require('mongoose');

// Save a reference to the Schema constructor
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CommentSchema = new Schema({
  // `subject` is required and of type String
  subject: {
    type: String,
    required: true,
  },

  // `author` is required and of type String
  author: {
    type: String,
    required: true,
  },

  // `body` is required and of type String
  comment: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model('Comment', CommentSchema);

// Export the Scrape model
module.exports = Comment;
