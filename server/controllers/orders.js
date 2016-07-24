var mongoose = require('mongoose');
var orderDb = mongoose.model('orderDb');

module.exports = (function() {
	return {
		addO: function(req,res){
			order = new orderDb(req.body);
			order.save(function(err, order){
				if(err){
					console.log(err);
					console.log('see above for error');
				} else {
					console.log("added Order!");
					res.json(order);
				}
			})
		},
		getO: function(req, res){
			orderDb.find({}, function(err, order){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got all the orders");
					res.json(order);
				}
			})
		},
		deleteO: function(req, res){
			orderDb.remove({_id: req.params.id}, function(err, order){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					res.json(order);
				}
			})
		}
	}
})();