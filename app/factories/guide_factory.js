"use strict";
//console.log("favorites factory loading");
app.factory("guideFactory", function($q, $http, userFactory, recipeFactory) {

    const getGuide = function() {
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/guides`, {headers:
                {
                    'Authorization': `${userFactory.authTokenGetter()}`,
                },
            })
                .then((object) => {
                   console.log("guide DETAILS:", object.data);
                   resolve(object.data);
                })

                .catch((error) => {
                    reject(error);
                });
        });
    };



    return {getGuide};
 });