"use strict";

app.controller("newRecipeCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, $location) {
	
	$scope.categories = [
        {section : "Overall Health", id : "1"},
        {section : "Better Immunity", id : "2"},
        {section : "Weight Loss", id : "3"},
        {section : "Detox", id : "4"},
        {section : "Reduce Inflammation", id : "5"},
        {section : "Energy", id : "6"},
        {section : "Digestive Health", id : "7"},
        {section : "Heart Health", id : "8"}
    ];
	
	let user = userFactory.currentUserIdGetter();

    $scope.recipe = {
  
        user_id: user,
        category_id: "",
        title: "",
        description: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        ingredient7: "",
        directions: "",
        notes: ""
    };

    $scope.submitRecipe = function() {
    	//console.log("you clicked on the submit recipe button");
        recipeFactory.addNewRecipe($scope.recipe)
            .then((data) => {
               // console.log("DATA from add recipe ctrl", data);             
                 $route.reload();
            });
    };

});
