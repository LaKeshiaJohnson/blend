"use strict";

console.log("favorites_ctrl.js is loading");

app.controller("favoritesCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, $location) {
	
	
	let user = userFactory.currentUserIdGetter();
	//$rootScope.showSearch = true;
    //$scope.searchText = filterFactory;

    $scope.favorites = {
    	user_id: user,
    	recipe_id: $routeParams.id,

    };

	$scope.addToFavorites = function () {
		console.log("you clicked on the ADD TO FAVS button");
		recipeFactory.addToFavorites($scope.favorites)
		.then((data) => {
			$scope.favorites.id = data.data.name;
		});
	};


	//addToFavorites();
	

});