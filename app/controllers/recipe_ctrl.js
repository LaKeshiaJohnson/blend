"use strict";

console.log("recipe_ctrl.js is loading");

app.controller("recipeCtrl", function ($scope, $route, $routeParams, recipeFactory, $location) {
	
	$scope.recipesInCategory = [];

	const showRecipesInCategory = function () {
		recipeFactory.getRecipesInCategory($routeParams.id)
		.then((recipesInCategory) => {
			$scope.recipesInCategory = recipesInCategory;
		});
	};

	showRecipesInCategory();
	

});