var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider.when('/things',{
		templateUrl : 'partials/things/index.html',
		controller  : 'things_cxr'
	})
	$routeProvider.when('/things/new',{
		templateUrl : 'partials/things/new.html',
		controller  : 'things_cxr'
	})
	$routeProvider.when('/things/show',{
		templateUrl : 'partials/things/show.html',
		controller  : 'things_cxr'
	})
	$routeProvider.when('/things/edit',{
		templateUrl : 'partials/things/edit.html',
		controller  : 'things_cxr'
	})
	$routeProvider.otherwise({
		redirectTo: '/things'
	})
})
