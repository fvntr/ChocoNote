var express = require('express');
var mongoose = require('mongoose');
var app = require('./server-config.js')

var port = 8080;

mongoose.connect('mongodb://localhost/choconote');

app.listen(port);
console.log("Server running")

module.exports = app; 
