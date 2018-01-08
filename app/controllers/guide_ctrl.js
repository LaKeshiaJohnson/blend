"use strict";

//calls getGuide in the guide_factory.

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