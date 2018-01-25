const mongoose = require('mongoose');

const AppChallengeIdeaSchema = mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('AppChallengeIdeaModel', AppChallengeIdeaSchema, 'appchallenge');