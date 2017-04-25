app.factory('ThingFactory',['$http',function($http) {

	var factory = {}
	var content = []

	factory.load = function() {
		var route = `http://localhost:8000`
		// var stuff = new_thing
		console.log(route)
		// console.log(stuff)
		$http.get(route).then(function(returned) {
			console.log('Returned:',returned)
		})
	}

	function valid(thing) {
		return true
	}

	factory.all = function() {
		return content
	}

	factory.get = function(callback) {
		if (typeof(callback) == 'function') {
			return callback(content)
		} else {
			throw new TypeError('Expected Function, got',callback.__proto__.constructor.name)
		}
	}

	factory.findex = function(id,key='_id') {
		for (var i = 0; i < content.length; i++) {
			if (content[i][key] == id) {
				return i
			}
		}
	}

	factory.find = function(id,key='_id') {
		var index = factory.findex(id,key)
		return content[index]
	}

	factory.create = function(new_thing) {
		var route = `/things/create`
		var stuff = new_thing
		console.log(route)
		console.log(stuff)
		if (valid(new_thing)) {
			$http.post(route,stuff).then(function(returned) {
				if (returned.status == 200) {
					content.push(returned.data)
				} else {
					console.log(returned)
				}
			})
		}
	}

	factory.update = function(id,patch) {
		if (valid(patch)) {
			$http.post(`/things/update/${id}`,{'query':{'_id':id},'patch':patch}).then(function(returned) {
				if (returned.status == 200) {
					var index = factory.findex(id)
					content[index] = returned.data
				} else {
					console.log(returned)
				}
			})
		}
	}

	factory.delete = function(id) {
		if (findex(id)+1) {
			$http.post(`/things/delete/${id}`).then(function(returned) {
				if (returned.status == 200) {
					var index = factory.findex(id)
					for (var i = index; i < content.length; i++) {
						content[i] = content[i+1]
					}
					content.pop()
				} else {
					console.log(returned)
				}
			})
		}
	}

	factory.load()

	return factory

}])
