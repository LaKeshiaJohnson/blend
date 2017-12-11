"use strict";

//console.log("recipe_ctrl.js is loading");

app.controller("recipeCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, $location) {
	
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


	let user = userFactory.currentUserIdGetter();
	

    $scope.favorites = {
    	user_id: user,
    	recipe_id: $routeParams.id,

    };
	
	$scope.addToFavorites = () => {
		console.log("you clicked on the add to favorites button");
		recipeFactory.addToFavorites($scope.favorites)
		.then((data) => {
			//console.log("DATA:", data);
			//$scope.favorites.id = data.data.name;
			//$location.url("/categories")
			$route.reload();
		});
	}; 

	showRecipeDetails();

});