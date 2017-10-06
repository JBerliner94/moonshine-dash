var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://reader:reader123@ds155674.mlab.com:55674/moonshine_store')
var Transaction = require('./models/transaction')

var newItem = new Transaction({
	buy_date: new Date,
	symbol: 'FAKE_TRANSACTION',
	buy_price: 27,
	quantity: 2,
	sell_date: new Date,
	sell_price: 26
})
// .save()
//   .then(()=>{console.log('saved')})
//   .catch(e=>{console.error(e)})
