"use strict";

//calls getMyRecipes in the recipeFactory to get all recipes a user has submitted.
//used in my_recipes.html

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

	$scope.deleteMyRecipe = function(id){
        recipeFactory.destroyMyRecipe(id)
        .then((irrelevant) => {
            showMyRecipes();
        });
    };

	showMyRecipes();

});