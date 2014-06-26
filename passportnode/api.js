var user = require('./users.js');
    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var app = express();

app.use(passport.initialize());
app.use(passport.session());



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
    //some user keys, keys formatted req.body.thing
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err) {
    res.send({success: true});
  });
};

var login = function(req, res, next) {
  console.log("hi");
  passport.authenticate('local'), function (req, res) {
    console.log(req.body);
  }
  // console.log('in login');
  // passport.authenticate('local', function (err, user, info) {
  //       if (err) {
  //         console.log("err");
  //           return next(err);
  //       }
  //       if (!user) {
  //         console.log('401');
  //           return res.send(401);
  //       }
 
  //       req.logIn(user, function (err) {
  //           if (err) {
  //             console.log('login err');
  //               return next(err);
  //           }
  //           console.log('in');
  //           res.cookie('user', JSON.stringify({'id': user.id}), { httpOnly: false } );
  //           return res.send(200);
  //       });
  //   })(req, res, next);

};
module.exports = {
  get: listUsers,
  post: saveUser,
  signin: login
};


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { console.log("in err"); return done(err); }
      if (!user) {
        console.log("in !user");
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));