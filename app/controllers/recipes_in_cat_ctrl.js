"use strict";

//calls getRecipesInCategory  and getCategoryName in category factory
//used in single_category.html

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