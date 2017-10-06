var express = require('express');
var router = express.Router();
// var db = require('../db');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Transaction = require('../models/transaction')
var Return = require('../models/return')
// var BuyTransaction = require('../models/buyTransaction')

/* GET home page. */
router.get('/', function(req, res, next) {
	Transaction.find({})
				.sort({sell_time: 1})
				.exec((err, transactions) => {

					Return.find({})
						  .sort({time: 1})
						  .exec((err, returns) => {
						  	res.render('index', { title: 'Express', 
								data: transactions,
								data2: returns,
								x:transactions.map(d=> { return d.sell_time.toJSON()}),
								y:transactions.map(d=>{return 100*(d.sell_price - d.buy_price)/d.buy_price}),
								x2:returns.map(d=>{return d.time.toJSON()}),
								y2:returns.map(d=>{return d.returns})
							})

						  })
					
				})
});

module.exports = router;
