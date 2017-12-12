"use strict";

console.log("my_recipes_ctrl.js is loading");

app.controller("myRecipesCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, favoritesFactory, $location) {
	$scope.myrecipes = [];
	let user = userFactory.currentUserIdGetter();

	const showMyRecipes = function () {
		//console.log("user is: ", user);
		recipeFactory.getMyRecipes(user)
		.then((myrecipes) => {
			
			$scope.myrecipes = myrecipes;
		});
		
	};

	showMyRecipes();

});