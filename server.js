// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// Create Instance of Express
var app = express();




// Configures database with mongoose
mongoose.connect((process.env.MONGODB_URI ||'mongodb://localhost/nytreact'));
var db = mongoose.connection;

// Displays mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Logs successful mongoose db login
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Adds routing middleware
var public_routes = require('./controllers/public_routes.js');
var api_routes = require('./controllers/api_routes.js');
app.use('/', public_routes);
app.use('/api', api_routes);

// Listening
var PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
	console.log("Listening on " + PORT);
});

