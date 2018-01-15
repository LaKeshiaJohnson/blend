"use strict";

//handles api calls for recipes

app.factory("recipeFactory", function($q, $http, categoryFactory, userFactory) {

//call to get a single recipe
//called from recipe_ctrl.js
	const getRecipeDetails = function(recipeId) { 
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/recipes/${recipeId}`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   //console.log("RECIPE DETAILS:", object.data);
                   resolve(object.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

//call to api to add a single recipe to a user's favroties
//called from recipe_ctrl.js
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
//call to add a recipe to the database
//called from new_recipe_ctrl.js
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

//call to api to get all the recipes a user has created
//called from my_recipes_ctrl.js
    const getMyRecipes = function() {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/myrecipes`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   //console.log("my recipes DETAILS:", object.data);
                   resolve(object.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

//call to api to get all of the recipes from the database
//called from all_recipes_ctrl.js
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

    const destroyMyRecipe = function(id){
            //console.log("item id", id);
        return $q((resolve, reject) => {
            $http.delete(`http://localhost:3000/recipes/${id}`, {headers:
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

//not being used
 /*   const getRecipeName = function(id) {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/recipes/${id}`,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                    let objectCollection = object.data;
                   //console.log("OBJECT COLLECTION:", objectCollection);
                   //console.log("OBJ COLLECTION . TITLE", objectCollection.title);
                    let recipeName = objectCollection.title;
                   // console.log("CATEGORY NAME:", categoryName);
                    resolve(recipeName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };*/

//api call to edit the recipe details
//called from edit_recipe_ctrl.js
    const editRecipe = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            //let newObj = angular.toJson(obj);
            let newObj = JSON.stringify(obj);
            $http.patch(`http://localhost:3000/recipes/${id}`, newObj, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {getRecipeDetails, addToFavorites, addNewRecipe, getMyRecipes, getAllRecipes, editRecipe, destroyMyRecipe};
 });