var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var schema = new Schema({
	time: {type: Date, value: new Date()},
	data: {type: Object, required: true}
});

module.exports = mongoose.model('MinuteData', schema)