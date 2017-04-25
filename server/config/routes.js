var things = require('../controllers/things.js')

module.exports = function(app){

	app.get('/things', function(req, res) {
		things.index(req, res);
	});

	app.get('/things/:id', function(req, res) {
		things.show(req, res);
	});

	app.post('/things', function(req, res) {
		things.create(req, res);
	});

	app.put('/things/:id', function(req, res) {
		things.update(req, res);
	});

	app.delete('/things/:id', function(req, res) {
		things.delete(req, res);
	});

}
