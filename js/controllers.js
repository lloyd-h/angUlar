// in []  we put dependencies of the application. myApp will have all the code 
// for our application. This is called namespacing. This variable is unique to this application
var myApp = angular.module('myApp', []);  

myApp.controller('MyController', ['$scope', '$http', function($scope, $http){
	
	$http.get('js/data.json').success(function(data){
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);