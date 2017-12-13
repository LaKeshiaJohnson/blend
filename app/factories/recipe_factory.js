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

    const addToFavorites = function(obj) {
        console.log("add to favs obj:", obj);
        let newObj = JSON.stringify(obj);
        return $http.post(`http://localhost:3000/favorites`, newObj,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
            .then( (data) => {
                return data;
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
                 });

    };

    const addNewRecipe = function(obj) {
        let newObj = JSON.stringify(obj);
        return $http.post(`http://localhost:3000/recipes`, newObj,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
        })
        .then ( (data) => {
            //console.log("new recipe data:", data);
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };

    const getMyRecipes = function() {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/myrecipes`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   console.log("my recipes DETAILS:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getAllRecipes = function() {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/recipes`,{headers:
                 {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   //console.log("all categories object:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getRecipeName = function(id) {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/recipes/${id}`,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                    let objectCollection = object.data;
                   console.log("OBJECT COLLECTION:", objectCollection);
                   console.log("OBJ COLLECTION . TITLE", objectCollection.title);
                    let recipeName = objectCollection.title;
                   // console.log("CATEGORY NAME:", categoryName);
                    resolve(recipeName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    return {getRecipeDetails, addToFavorites, addNewRecipe, getMyRecipes, getAllRecipes, getRecipeName};
 });