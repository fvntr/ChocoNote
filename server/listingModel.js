var mongoose = require('mongoose'); 

var ListingSchema = new mongoose.Schema({
		name: String, 
		origin: String,
		cocoa: String, 
		region: String, 
		maker: String,
		description: String
})

module.exports = mongoose.model('Listing', ListingSchema);