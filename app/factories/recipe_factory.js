"use strict";

app.factory("recipeFactory", function($q, $http, categoryFactory, userFactory) {

	const getRecipeDetails = function(recipeId) {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/recipes/${recipeId}`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   console.log("RECIPE DETAILS:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
        });
    };


    return { 
            getRecipeDetails
            };
 });