var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var schema = new Schema({
	buy_time: {type: Date, value:new Date()},
	symbol: {type: String, required: true},
	buy_price: {type: Number, required: true},
	quantity: {type: Number, required: true},
	sell_time: {type: Date, required: true},
	sell_price: {type: Number, required: true}
});

// schema.methods.sell = (sell_price) => {
// 	// Update sell price
// 	this.sell_date = new Date()
// 	this.sell_price = sell_price
// }

module.exports = mongoose.model('Transaction', schema)