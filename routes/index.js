var express = require('express');
var router = express.Router();
// var db = require('../db');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Transaction = require('../models/transaction')
// var BuyTransaction = require('../models/buyTransaction')

/* GET home page. */
router.get('/', function(req, res, next) {
	Transaction.find({}).sort({sell_time: 1}).exec((err, data) => {
		// console.log(data.map(d=> { return d.sell_time}))
		// console.log(data.map(d=> {return new Date(d.sell_time)}))
		res.render('index', { title: 'Express', 
							data: data,
							y:data.map(d=>{return 100*(d.sell_price - d.buy_price)/d.buy_price}),
							x:data.map(d=> { return d.sell_time.toJSON()})
							})
	})
});

module.exports = router;
