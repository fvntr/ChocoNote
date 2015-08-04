var express = require('express'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Listing = require('./listingModel')
var db = require('./db')

var app = express();
app.use(express.static (__dirname+'/../client'));
app.use(bodyParser.json());

app.get('/api/records', function(req,res){
	Listing.find({}, function(err, docs){
		if(err) throw err;
		console.log("DOCSSSS", docs)
		res.json(docs);
	})
})

app.post('/api/listing', function(req, res){
	var listing = req.body
	console.log(listing)

	Listing.findOne({ name: listing.name })
		.exec(function(err, name){
			if(!name){
				var newListing = new Listing({
					name: req.body.name,
					origin: req.body.origin,
					cocoa: req.body.cocoa,
					region: req.body.region,
					maker: req.body.maker,
					description: req.body.description
				})
				console.log("newListing", newListing)
				newListing.save(function(err, newUser){
					if(err){
						console.log("going inside")
						res.send(500, err);
					} else{
						console.log(newUser)
						// console.log('Chocolate already exists')
					}
				})
			}
		})
})

module.exports = app;

