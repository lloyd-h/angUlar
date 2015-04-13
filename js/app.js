/**
 * in []  we put dependencies of the application. myApp will have all the code 
 * for our application. This is called namespacing. This variable is unique to this application
 */
var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);