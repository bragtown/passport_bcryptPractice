'use strict';

angular.module('passportpracticeApp')
  .service('Login', function Login($cookies, $http, $q) {
    return {
        signin: function(userData){
            alert(userData);
            if(userData){
                $http.post("http://localhost:8888/users/signin", userData).success(function(data){
                    alert(data);
                });
            };
        },
        register: function(userData){
            if(userData){
                alert(userData);
                $http.post("http://localhost:8888/users/register", userData).success(function(data){
                    alert(data);
                });
            };
        }


    }
  });
