"use strict";

//handles calls for the prefect blend ingredient guide
app.factory("guideFactory", function($q, $http, userFactory, recipeFactory) {

//called from guide_ctrl.js
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