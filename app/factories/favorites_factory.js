"use strict";
//console.log("favorites factory loading");
app.factory("favoritesFactory", function($q, $http, userFactory, recipeFactory) {

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