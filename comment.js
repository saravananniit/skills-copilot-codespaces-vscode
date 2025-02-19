// Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Get the comments from JSON file
var comments = require('./comments.json');

// Get the comments from JSON file
var comments = require('./comments.json');

// Set the path to the public directory
app.use(express.static('public'));

// Get the comments from JSON file
var comments = require('./comments.json');

//

