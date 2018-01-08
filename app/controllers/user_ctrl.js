"use strict";

//console.log("user controller has loaded");
//calls the user_factory.js to handle auth functionality
//used in signup, login, and nav partials

app.controller("userCtrl", function ($scope, $window, userFactory, $location) {

$scope.user = {
		first_name: "",
		last_name: "",
		email: "",
		password: ""
	};

	$scope.signUp = () => {
		console.log("you clicked on the signup button");
		const userObj = {"user": $scope.user};
		const userObjString = JSON.stringify(userObj);
		userFactory.signUp(userObjString)
			.then((data) => {
				//$scope.login();
				$location.url("/categories");
				// console.log ("DATA FROM USER SUBMIT", data);
				
		});
	};



	$scope.login = () => {
		console.log("you clicked on the login button");
		userFactory.login($scope.user)
		.then((data) => {
				$location.url("/categories");
				// console.log ("DATA BACK TO CONTROLLER", data);
			});
	};
	

	$scope.isLoggedIn = function () {
		return userFactory.isLoggedIn();
	};

 	$scope.logout = function() {
		userFactory.logOut();
		 $location.url("");
	};
});

