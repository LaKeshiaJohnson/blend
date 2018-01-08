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

//calls getAllRecipes in the recipe_factory.js. 
//The factory makes a call to the rails database and returns the recipes.
//used in all_recipes.html