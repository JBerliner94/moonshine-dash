var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var schema = new Schema({
	time: {type: Date, value:new Date()},
	returns: {type: Number, required: true},
});

// schema.methods.sell = (sell_price) => {
// 	// Update sell price
// 	this.sell_date = new Date()
// 	this.sell_price = sell_price
// }

module.exports = mongoose.model('Return', schema)