"use strict";

//console.log("category_ctrl.js is loading");

app.controller("categoryCtrl", function ($scope, $route, categoryFactory, $location, $routeParams) {
	$scope.category = [];
	
//calls getAllCategories in the category_factory.js. The factory makes a call to the rails database and returns the categories.
	const showAllCategories = function () {
		categoryFactory.getAllCategories()
		.then((category) => {
			$scope.category = category;
		});
	};


	showAllCategories();

});


//used in all_categories.html