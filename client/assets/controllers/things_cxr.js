app.controller('things_cxr',['$scope','$location','$routeParams','ThingFactory',function($scope,$location,$routeParams,ThingFactory,) {

	$scope.Thing = ThingFactory

	$scope.thing_index = ThingFactory.all( )
	$scope.thing_show = function(_id) {
		return ThingFactory.find(_id)
	}

	$scope.thing_new = {}
	$scope.thing_create = function() {
		ThingFactory.create($scope.thing_new)
		$location.url('/things')
	}

	$scope.thing_edit = {}
	$scope.thing_update = function() {
		ThingFactory.update($routeParams.id,$scope.thing_edit = {})
		$location.url('/things')
	}

	$scope.thing_delete = function() {
		ThingFactory.delete($scope.new_thing)
	}
}])
