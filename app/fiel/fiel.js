'use strict';

angular.module('myApp.fiel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fiel', {
    templateUrl: 'fiel/fiel.html',
    controller: 'FielCtrl',
    controllerAs: 'fiel'
  });
}])

.controller('FielCtrl', [function() {

  this.invalidPass = false;
  this.oldPass = '';
  this.newPass = '';
  this.prossesing = false;
  this.errorMessage = "";
  this.progress = 0;

  /*
  */
  this.validatePasswords = function(){
      this.invalidPass = false;
      if(this.oldPass === this.newPass && (this.oldPass !== '' && this.newPass !== '')){
        this.invalidPass = true;
        this.errorMessage = this.invalidPass ?
        "The password are the same, please make sure you choose a diferent password.":"";
        return false;
      }
      return true;
  }

  /**/
  this.changePass = function(){

    if(this.validatePasswords()){

      this.prossesing = true;
      this.progress = 0;
      
      for(let index = 1; index <= 10; index ++ ){

        setTimeout( () => {
          this.progress += 10;
        }, 3000);

      }
      var promise = new Promise((response, reject) => {


      });

      promise.then((response) => {
        this.prossesing = false;
        console.log(response);
      }, (error) =>{
        this.prossesing = false;
        console.log(error)
      });
    }

  }
}]);
