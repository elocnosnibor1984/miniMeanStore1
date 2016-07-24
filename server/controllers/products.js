var mongoose = require('mongoose');
var productDb = mongoose.model('productDb');

module.exports = (function() {
	return {
		addP: function(req,res){
			product = new productDb(req.body);
			product.save(function(err, cust){
				if(err){
					console.log(err);
					console.log('see above for error');
				} else {
					res.json(cust);
				}
			})
		},
		getP: function(req, res){
			productDb.find({}, function(err, cust){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got all the products");
					res.json(cust);
				}
			})
		},
		deleteP: function(req, res){
			productDb.remove({_id: req.params.id}, function(err, cust){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					res.json(cust);
				}
			})
		}
	}
})();