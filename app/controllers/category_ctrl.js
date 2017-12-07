"use strict";

console.log("category_ctrl.js is loading");

app.controller("categoryCtrl", function ($scope, $route, categoryFactory, $location, $routeParams) {
	$scope.category = [];
	//let user = authFactory.getCurrentUser();
	//$rootScope.showSearch = true;
    //$scope.searchText = filterFactory;

	const showAllCategories = function () {
		categoryFactory.getAllCategories()
		.then((category) => {
			$scope.category = category;
		});
	};


	showAllCategories();

});