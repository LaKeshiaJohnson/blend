"use strict";

console.log("all_recipes_ctrl.js is loading");

app.controller("allRecipesCtrl", function ($scope, $route, $routeParams, recipeFactory, $location) {
	$scope.allrecipes = [];
	
	const showAllRecipes = function () {
		recipeFactory.getAllRecipes()
		.then((allrecipes) => {
			$scope.allrecipes = allrecipes;
		});
	};


	showAllRecipes();

});