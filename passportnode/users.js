var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	//some user keys difined by the type of data they take (eg. String, Number, etc)
	firstname: String,
	lastname: String,
	username: String,
	password: String
});
var user = mongoose.model('user', userSchema);

module.exports = user;