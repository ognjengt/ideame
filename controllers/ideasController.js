// ideas controller routes
var express = require('express');
var router = express.Router();

// post /api/ideas/random
router.post('/random/',(req,res) => {
  var payload = {
    "text": "New idea",
    "attachments": [
        {
            "color": "#2ecc71",
            "title": "Super idea",
            "text": "To see more about this idea check out this link..."
        }
    ]
}
  res.send(payload);
});

// post /api/ideas/javascript
router.post('/javascript',(req,res) => {
  res.send('Generating random javascript idea.');
});

module.exports = router;