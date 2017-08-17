var contactsApp = angular.module('contactsApp', ["ngRoute"])
.config(function($routeProvider){
	$routeProvider.when('/table',
	{
		templateUrl : 'app/views/table.html',
		controller : 'contactsController'
	});
	$routeProvider.when('/create',
	{
		templateUrl : 'app/views/create.html',
		controller : 'contactsController'
	});
	$routeProvider.when('/save',
	{
		templateUrl : 'app/views/test.php',
		controller : 'contactsController'
	});
	$routeProvider.otherwise({redirectTo: '/table'});
});