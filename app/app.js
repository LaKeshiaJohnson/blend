"use strict";

console.log("app.js is loading");

const app = angular.module("BlendIt", ["ngRoute"]);

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
	})
	.when('/category/:id', {
		templateUrl: 'partials/single_category.html',
		controller: 'recipeInCatCtrl',
	})
	.when('/recipe/:id', {
		templateUrl: 'partials/recipe_details.html',
		controller: "recipeCtrl",
	})
	.when('/favorites', {
		templateUrl: 'partials/favorites.html',
		controller: "favoritesCtrl",
	})
	.when('/newrecipe', {
		templateUrl: 'partials/new_recipe.html',
		controller: "newRecipeCtrl",
	})
	.when('/myrecipes', {
		templateUrl: 'partials/my_recipes.html',
		controller: "myRecipesCtrl"
	});

});