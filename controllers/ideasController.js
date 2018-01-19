// ideas controller routes
var express = require('express');
var router = express.Router();
var fetcher = require('../fetcher')

// post /api/ideas/random
// salje se /ideame js, znaci /ideame [language] ili samo /ideame
router.post('/random',(req,res) => {
  var language = req.body.text;
  var payload = {};

  if (!language) {
    fetcher.getRandomIdea()
    .then((ideas) => {
      var idea = ideas[Math.floor(Math.random()*ideas.length)];
      payload = {
        "attachments": [
          {
              "color": "#2ecc71",
              "title": idea.title,
              "text": idea.description
          }
        ]
      }
      res.send(payload)
    })
  }

  else {
    fetcher.getLanguageIdea(language)
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