var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /index
  //$urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller: "mainController"
    })
    .state('homePage', {
      url: "/homePage",
      templateUrl: "homePage.html",
      controller: "mainController"
    });
});
myApp.controller('mainController', ['$scope', '$window','$location', mainController]);

function mainController($scope, $window, $location) {
  $scope.title = 'Login Form'; 
  $scope.currentPath=$location.path();
  console.log($scope.currentPath);
  $scope.submit = function() {
  	 var username = $scope.username;
  	 var password = $scope.password;
	  	if(username == null && password== null)
	    {
	       
	         $window.alert('Please enter username and password');
	       
	    }
	    else{
	        $location.path("homePage");
	    }
  };
 
}
