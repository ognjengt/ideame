const mongoose = require('mongoose');
const config = require('./config');
const Idea = require('./models/Idea');
const AppChallengeIdea = require('./models/AppChallengeIdea');
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

fetcher.addAppChallengeIdea = (idea) => {
  var appChallengeIdea = new AppChallengeIdea({
    title: idea.title,
    description: idea.description
  });

  return appChallengeIdea.save()
}

module.exports = fetcher
