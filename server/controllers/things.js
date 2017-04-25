var Thing = require('../models/thing.js')

var things = {}

things.index  = function(request, response) {
	Thing.find({},function(error,result) {
		response.json({'things':result})
	})
}

things.create = function(request,response) {
	new_thing = new Thing({
		field   : request.body.field,
		temp_id : request.body.temp_id,
	})
	new_thing.save(function(error,result) {
		if (error) {
			console.log(500,error)
		} else {
			console.log(201)
			// console.log(result)
			response.json(result)
		}
	})
}

things.update = function(request, response) {
	var query = request.body.query
	var patch = request.body.patch
	Thing.update(query,patch,function(error,result) {
		if (error) {
			console.log(500,error)
		} else {
			console.log(201.5)
			response.json(result)
		}
	})
}

things.delete = function(request, response) {
	Thing.remove({'_id':request.body._id},function(error,result) {
		if (error) {
			console.log(500,error)
		} else {
			console.log(201.9)
			response.json(result)
		}
	})
}

module.exports = things
