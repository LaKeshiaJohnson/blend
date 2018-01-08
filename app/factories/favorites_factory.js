"use strict";

//favorites factory handles api calls for recipes a user has added to their favorites section

app.factory("favoritesFactory", function($q, $http, userFactory, recipeFactory) {

//call to api to get all of the recipes a user has saved as a favorite
//called from favorites_ctrl.js
    const getFavorites = function() {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/favorites`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   console.log("favorites DETAILS:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
        });
    };

//call to api to remove a recipe from a user's favorite list
//called from favorites_ctrl.js
//pass in recipe id
    const destroyFavorite = function(id){
            //console.log("item id", id);
        return $q((resolve, reject) => {
            $http.delete(`http://localhost:3000/favorites/${id}`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };


    return {getFavorites, destroyFavorite};
 });