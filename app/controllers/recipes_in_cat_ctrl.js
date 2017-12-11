"use strict";

//console.log("recipes_in_cat_ctrl.js is loading");

app.controller("recipeInCatCtrl", function ($scope, $route, $routeParams, categoryFactory, $location) {
	
	$scope.recipesInCategory = [];

	const showRecipesInCategory = function () {
		categoryFactory.getRecipesInCategory($routeParams.id)
		.then((recipesInCategory) => {
			$scope.recipesInCategory = recipesInCategory;
		})
		.then(() => {
			categoryFactory.getCategoryName($routeParams.id)
				.then ((object) => {
					$scope.categoryName = object;
				});
		});
	};

	showRecipesInCategory();
	

});