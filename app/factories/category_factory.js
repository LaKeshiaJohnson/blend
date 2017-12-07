"use strict";

console.log("category_factory.js is loading");

app.factory("categoryFactory", function($q, $http) {

	const getAllCategories = function() {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories`)
                .then((object) => {
                   console.log("all categories object:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
    	});
 	};

    const getCategoryName = function() {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories`)
                .then((object) => {
                    let objectCollection = object.data;
                   console.log("OBJECT COLLECTION:", objectCollection);
                   console.log("OBJ COLLECTION . SECTION", objectCollection.section);
                    let categoryName = objectCollection.section;
                    console.log("CATEGORY NAME:", categoryName);
                    resolve(categoryName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

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

 	return { 
    		getAllCategories,
    		getRecipesInCategory,
            getCategoryName

 			};
 });
