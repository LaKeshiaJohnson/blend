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

 	/*const getCategoryName = function(id) {
       
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/categories/id`)
                .then((object) => {
                   console.log("all categories object:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
    	});
 	};*/

 /*	const getSingleCategory = function(id) {
 		console.log("category id", id);
 		return $q((resolve, reject) => {
 			$http.get('http://localhost:3000/categories/:id')
 			.then((thing) => {
 				console.log("Single category object:", thing.data);
 				resolve(thing.data);
 			})
 			.catch((error) => {
 				reject(error);
 			});
 		});
 	};*/

 	return { 
    		getAllCategories,
    		//getSingleCategory

 			};
 });
