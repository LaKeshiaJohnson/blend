"use strict";
//category factory handles api calls for category info

app.factory("categoryFactory", function($q, $http, $injector, userFactory) {

//call to api to get all of the recipe cateogries
//called from category_ctl.js
	const getAllCategories = function() {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories`,{headers:
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
//call to api to get all of the recipes in a certain category
//called from recipes_in_cat_ctrl.js
//passing in the catgegory id
    const getRecipesInCategory = function(categoryId) {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories/${categoryId}`,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   //console.log("Recipes in category obj:", object.data);
                   resolve(object.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

//call to api to get the name of a category
//called from recipes_in_cat_ctrl.js
//passing in the category id
    const getCategoryName = function(id) {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categoryname/${id}`,{headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                    let objectCollection = object.data;
                   //console.log("OBJECT COLLECTION:", objectCollection);
                   //console.log("OBJ COLLECTION . SECTION", objectCollection.section);
                    let categoryName = objectCollection.section;
                   // console.log("CATEGORY NAME:", categoryName);
                    resolve(categoryName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


 	return { getAllCategories, getRecipesInCategory, getCategoryName };
 });
