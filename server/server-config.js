var express = require('express'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(express.static (__dirname+'/../client'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));


app.get('/listing', function(req,res){
	res.send("hello")
})

app.post('/listings', function(req, res){
	console.log(req.body)
})

module.exports = app;