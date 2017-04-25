var things = require('../controllers/things.js')

module.exports = function(app){

	app.get(`/things/index`, function(req, res) {
		console.log('HIT')
		things.index(req, res);
	});

	app.get('/things/:id', function(req, res) {
		things.show(req, res);
	});

	app.post('/things/create', function(req, res) {
		things.create(req, res);
	});

	app.post('/things/update/:id', function(req, res) {
		things.update(req, res);
	});

	app.post('/things/delete/:id', function(req, res) {
		things.delete(req, res);
	});

}
