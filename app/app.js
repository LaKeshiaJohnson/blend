"use strict";

console.log("app.js is loading");

const app = angular.module("BlendIt", ["ngRoute"]);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/all_categories.html',
		controller: 'categoryCtrl',
			//resolve: {isAuth}
	})
	.when('/signup', {
		templateUrl: 'partials/signup.html',
		controller: 'authCtrl',
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'authCtrl',
	})
	.when('/categories', {
		templateUrl: 'partials/all_categories.html',
		controller: 'categoryCtrl',
			//resolve: {isAuth}
	})
	.when('/category/:id', {
		templateUrl: 'partials/single_category.html',
		controller: 'recipeCtrl',
			//resolve: {isAuth}
	})
	.when('/recipe/:id', {
		templateUrl: 'partials/recipe_details.html',
		controller: "recipeCtrl",
			//resolve: {isAuth}
	});

	});