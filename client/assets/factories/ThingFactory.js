app.factory('ThingFactory',['$http',function($http) {

	var factory = {}
	var content = []

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
		if (valid(new_thing)) {
			$http.post('/things',new_thing).then(function(returned) {
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
			$http.put('/things',{'query':{'_id':id},'patch':patch}).then(function(returned) {
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
			$http.delete('/things/id').then(function(returned) {
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

	return factory

}])
