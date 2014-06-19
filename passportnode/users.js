var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	//some user keys difined by the type of data they take (eg. String, Number, etc)
});
var user = mongoose.model('user', userSchema);

module.exports = user;