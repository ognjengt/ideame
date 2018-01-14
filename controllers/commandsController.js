// commands controller routes
var express = require('express');
var router = express.Router();

// get /api/commands/
router.get('/',(req,res) => {
  res.send('Hello world!')
})

// post /api/commands/
router.post('/',(req,res) => {
  
})

module.exports = router;