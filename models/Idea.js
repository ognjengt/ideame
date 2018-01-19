const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({
  title: String,
  description: String,
  language: String
});

module.exports = mongoose.model('IdeaModel', IdeaSchema, 'ideas');