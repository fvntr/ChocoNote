var mongoose = require('mongoose'); 

var ListingSchema = new mongoose.Schema({
		name: String, 
		chocolatier: String, 
		origin: String,
		content: String, 
		sampled: {type: Date}, 
		color: String, 
		price: Number,
		notes: String,
		rating: Number, 
})

module.exports = mongoose.model('Listing', ListingSchema);