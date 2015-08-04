var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/choconote');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("db running");
});


db.on('close', function(callback){
	console.log("db closed")
})

module.exports = db
