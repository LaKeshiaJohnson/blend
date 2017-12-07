"use strict";

console.log("recipe_ctrl.js is loading");

app.controller("recipeCtrl", function ($scope, $route, $routeParams, recipeFactory, $location) {
	
	$scope.recipe = [];
	//let user = authFactory.getCurrentUser();
	//$rootScope.showSearch = true;
    //$scope.searchText = filterFactory;

	const showRecipeDetails = function () {
		recipeFactory.getRecipeDetails($routeParams.id)
		.then((recipe) => {
			$scope.recipe = recipe;
		});
	};


	showRecipeDetails();
	

});