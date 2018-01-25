// ideas controller routes
var express = require('express');
var router = express.Router();
var fetcher = require('../fetcher')

// post /api/ideas/random
// salje se /ideame js, znaci /ideame [language] ili samo /ideame
router.post('/random',(req,res) => {
  var tech = req.body.text;
  var payload = {};

  if (!tech) {
    fetcher.getRandomIdea()
    .then((ideas) => {
      var idea = ideas[Math.floor(Math.random()*ideas.length)];
      var techImplementing = idea._doc.tech == 'all' ? "any technology or language" : idea._doc.tech;
      var tryImplementing = "Try implementing this using: "+ techImplementing;
      payload = {
        "attachments": [
          {
              "color": "#444",
              "title": idea.title,
              "text": idea.description + "\n" + tryImplementing
          }
        ]
      }
      res.send(payload)
    })
  }
  // new command /ideame publish-to-appchallenge "App name" "App description"
  else if(tech.includes('publish-to-appchallenge')) {
    var idea = {
      title: 'Test',
      description: 'Test desc, livestream sudodeploy'
    };
    fetcher.addAppChallengeIdea(idea)
           .then((result) => {
             if(result) res.send('Idea added to appchallenge!')
             else console.log('Something went wrong!')
           })
  }

  else {
    fetcher.getTechIdea(tech)
    .then((idea) => {
      payload = {
        "attachments": [
          {
              "color": "#2ecc71",
              "title": idea.title,
              "text": idea.description
          }
        ]
      }
    })
    
  }
  
  //res.send(payload);
});

module.exports = router;