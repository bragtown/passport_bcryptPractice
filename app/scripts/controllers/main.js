'use strict';

angular.module('passportpracticeApp')
  .controller('MainCtrl', function ($scope, Login, $cookies, $location, $http) {

  	$scope.SignIn = function(){
  		Login.signin({
  			username: $scope.username, 
  			password: $scope.password
  		});
  	}
  	$scope.SignUp = function(){
  		Login.register({
  			username: $scope.username, 
  			password: $scope.password,
  			firstname: $scope.firstname,
  			lastname: $scope.lastname
  		});
  	}

  });
