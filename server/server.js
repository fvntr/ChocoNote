var express = require('express'); 
var mongoose = require('mongoose');

var app = express(); 

mongoose.connect('mongodb://localhost/choconote');

app.listen(8080);

module.exports = app; 