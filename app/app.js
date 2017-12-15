"use strict";

console.log("app.js is loading");

const app = angular.module("BlendIt", ["ngRoute"]);

let isAuth = (userFactory) => {
	//console.log ("value of isAuth function", userFactory.isAuthenticated());
	return userFactory.isAuthenticated();
};

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/welcome.html'
		//controller: 'categoryCtrl',
	})
	.when('/signup', {
		templateUrl: 'partials/signup.html',
		controller: 'userCtrl',
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'userCtrl',
	})
	.when('/categories', {
		templateUrl: 'partials/all_categories.html',
		controller: 'categoryCtrl',
			//resolve: {isAuth}
	})
	.when('/category/:id', {
		templateUrl: 'partials/single_category.html',
		controller: 'recipeInCatCtrl',
			//resolve: {isAuth}
	})
	.when('/recipe/:id', {
		templateUrl: 'partials/recipe_details.html',
		controller: "recipeCtrl",
			//resolve: {isAuth}
	})
	.when('/favorites', {
		templateUrl: 'partials/favorites.html',
		controller: "favoritesCtrl",
			//resolve: {isAuth}
	})
	.when('/newrecipe', {
		templateUrl: 'partials/new_recipe.html',
		controller: "newRecipeCtrl",
			//resolve: {isAuth}
	})
	.when('/myrecipes', {
		templateUrl: 'partials/my_recipes.html',
		controller: "myRecipesCtrl",
			//resolve: {isAuth}
	})
	.when('/allrecipes', {
 		templateUrl: 'partials/all_recipes.html',
 		controller: "allRecipesCtrl",
 			//resolve: {isAuth}
  	})
	.when('/guide', {
		templateUrl: 'partials/guide.html',
		controller: "guideCtrl",
			//resolve: {isAuth}
	});

});