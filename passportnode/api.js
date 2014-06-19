var user = require('./users.js');
var listUsers = function(req, res) {
  var filter = {};
  if (req.params.type) {
    filter = {title: req.params.type};
  }
  user.find(filter)
  .select('user_name password') //any user object key name
  .exec(function(err, users) {
    //if users.length > 1 res.send(users[users.length -1])
    if (posts.length > 1){
      var lastUserNum = users.length-1;
      res.send(users[lastUserNum]);
    }
    else {
      res.send(users[0]);
    }
    
  });  
};

var saveUser = function(req, res) {
  console.log(req.body);
  var newUser = new user({
    //some user keys, keys formatted user.body.thing
  });
  newUser.save(function(err) {
    res.send({success: true});
  });
};

module.exports = {
  get: listUsers,
  post: saveUser
};