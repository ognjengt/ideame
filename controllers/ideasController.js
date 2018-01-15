// ideas controller routes
var express = require('express');
var router = express.Router();

// post /api/ideas/random
router.post('/random/',(req,res) => {
  res.send('Now i will generate a random idea');
});

// post /api/ideas/javascript
router.post('/javascript',(req,res) => {
  res.send('Generating random javascript idea.');
});

module.exports = router;