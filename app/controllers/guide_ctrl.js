"use strict";

//console.log("guide_ctrl.js is loading");

app.controller("guideCtrl", function ($scope, $route, $location, $routeParams, guideFactory) {
	$scope.guide = [];
	
	const showGuide = function () {
		guideFactory.getGuide()
		.then((guide) => {
			$scope.guide = guide;
		});
	};


	showGuide();

});