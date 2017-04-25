var mongoose = require('mongoose')

var ThingSchema = new mongoose.Schema({
	field   : String,
	temp_id : Number,
},{	timestamps: { 
		createdAt: 'created_at', 
		updatedAt: 'updated_at',
	} 
});

mongoose.model('things',ThingSchema);

module.exports = mongoose.model('things');
