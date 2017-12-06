"use strict";

app.factory("recipeFactory", function($q, $http, categoryFactory) {

	const getRecipesInCategory = function(categoryId) {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories/${categoryId}`)
                .then((object) => {
                   console.log("Recipes in category obj:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
    	});
 	};



 	return {getRecipesInCategory};
 });