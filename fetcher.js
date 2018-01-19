const mongoose = require('mongoose');
const config = require('./config');
const Idea = require('./models/Idea')
mongoose.connect(config.mlab)

var fetcher = {}

fetcher.getRandomIdea = () => {
  return Idea.find({ language: 'all'}, function(err,docs) {
    return docs
  })
}


fetcher.getLanguageIdea = (language) => {
  return Idea.find({ language: language}, function(err,doc) {
    return doc
  })
}

module.exports = fetcher
