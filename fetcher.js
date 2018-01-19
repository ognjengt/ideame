const mongoose = require('mongoose');
const config = require('./config');
const Idea = require('./models/Idea')
mongoose.connect(config.mlab)

var fetcher = {}

fetcher.getRandomIdea = () => {
  return Idea.find({}, function(err,docs) {
    return docs
  })
}


fetcher.getTechIdea = (tech) => {
  return Idea.find({tech : {$regex : ".*"+tech+".*"}}, function(err,doc) {
    return doc
  })
}

module.exports = fetcher
