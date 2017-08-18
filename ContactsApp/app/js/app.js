var contactsApp = angular.module('contactsApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){

	$routeProvider.when('/contacts/table',
	{
		templateUrl : 'app/views/table.html',
		controller : 'contactsController'
	});
	$routeProvider.when('/contacts/create',
	{
		templateUrl : 'app/views/create.html',
		controller : 'createController'
	});
	$routeProvider.when('/contacts/edit',
	{
		templateUrl : 'app/views/edit.html',
		controller : 'editController'
	});
	$routeProvider.when('/contacts/favorite',
	{
		templateUrl : 'app/views/favorite.html',
		controller : 'favoriteController'
	});
	$routeProvider.when('/contacts/search',
	{
		templateUrl : 'app/views/search.html',
		controller : 'searchController'
	});
	$routeProvider.otherwise({redirectTo: '/contacts/table'});
	$locationProvider.html5Mode(true);
});