"use strict";

//console.log("favorites_ctrl.js is loading");

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
		/*.then(() => {
			recipeFactory.getRecipeName($routeParams.id)
				.then ((object) => {
					$scope.recipeName = object;
				});
		});*/
	};

	$scope.destroyFavorite = function (id) {
        favoritesFactory.destroyFavorite(id)
        .then((taco) => {
            $route.reload();
        });
    };

 	showFavorites();
});