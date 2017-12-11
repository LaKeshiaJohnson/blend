"use strict";

//console.log("user_factory.js is loading");


app.factory("userFactory", function ($q, $http, $injector) {
	

let currentUserToken = "";
    let currentUserId = "";
    let loggedIn = false;

    const authTokenGetter = () => {
        return currentUserToken;
    };

    const currentUserIdGetter = () => {
        return currentUserId;
    };

    const getAllUsers = () => {
    let UsersArray = [];
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/users`, {
                headers: {'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MTI4MzE5NTd9.OY7b8PzuydU5TtZQK5s22qW-nQqyoC6QBd_0dxwjn40'}
            }).then(results => {
                resolve(results.data);
            });
        });
    };

    const signUp = function(userObject) {
        console.log("USER OBJECT", userObject);
        return $q((resolve, reject) => {
            console.log ("userObject again", userObject);
            $http.post(`http://localhost:3000/users`, userObject)
            .then( (data) => {
                currentUserId = data.data.id;
                console.log ("currentUserId", currentUserId);
                resolve(data);
            });

        });
    };

    const login = (emailPasswordObject) => {
        console.log("emailPasswordObject", emailPasswordObject);
        return $q((resolve, reject) => {
            $http.post(`http://localhost:3000/authenticate`, emailPasswordObject)
             //console.log("AUTHENTICATED DATA RETURN", data);
            .then(data => {
                // console.log("AUTHENTICATED DATA RETURN", data);
                currentUserToken = data.data.auth_token;
                currentUserId = data.data.user_id;
                loggedIn = true;
                console.log ("token", currentUserToken, "user_id", currentUserId);
                resolve(data);
            });
        });
    };

    return {getAllUsers, signUp, login, authTokenGetter, currentUserIdGetter};
        


});