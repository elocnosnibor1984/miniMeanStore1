var mongoose = require('mongoose');
var customerDb = mongoose.model('customerDb');

module.exports = (function() {
	return {
		addCustomer: function(req,res){
			customer = new customerDb(req.body);
			customer.save(function(err, cust){
				if(err){
					console.log(err);
					console.log('see above for error');
				} else {
					res.json(cust);
				}
			})
		},
		getCustomers: function(req, res){
			customerDb.find({}, function(err, cust){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					res.json(cust);
				}
			})
		},
		delete: function(req, res){
			customerDb.remove({_id: req.params.id}, function(err, cust){
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