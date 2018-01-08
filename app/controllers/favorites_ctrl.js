"use strict";

//calls getFavorites and destroyFavorite in the favorites_factory.js. 
//used in favorites.html

app.controller("favoritesCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, favoritesFactory, $location) {
	$scope.favs = [];
	let user = userFactory.currentUserIdGetter();

	const showFavorites = function () {
		//console.log("user is: ", user);
		favoritesFactory.getFavorites(user)
		.then((favs) => {
			//console.log("show user favorites:", favs);
			$scope.favs = favs;
		});
	};

	$scope.destroyFavorite = function (id) {
        favoritesFactory.destroyFavorite(id)
        .then((taco) => {
            $route.reload();
        });
    };

 	showFavorites();
});