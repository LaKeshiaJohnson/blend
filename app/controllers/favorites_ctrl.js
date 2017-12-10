"use strict";

console.log("favorites_ctrl.js is loading");

app.controller("favoritesCtrl", function ($scope, $route, $routeParams, recipeFactory, $location) {
	
	$scope.favorites = [];
	//let user = authFactory.getCurrentUser();
	//$rootScope.showSearch = true;
    //$scope.searchText = filterFactory;

	const addToFavorites = function () {
		recipeFactory.getRecipeDetails($routeParams.id)
		.then((recipe) => {
			$scope.favorites = favorites;
		});
	};


	showRecipeDetails();
	

});