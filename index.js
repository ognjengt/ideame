var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();


var ideaController = require('./controllers/ideaController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/ideas', ideaController);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});