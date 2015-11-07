/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {controller: "homeController", templateUrl: "../views/home.html"})
		.when("/stop", {controller: "stopWordsController", templateUrl: "../views/stop.html"})
    	.otherwise({redirectTo: "/"});
}])
