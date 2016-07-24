var customer = require('./../controllers/mongooses.js');
var product = require('./../controllers/products.js');
var order = require('./../controllers/orders.js');

module.exports = function(app){
	app.post('/customer', function(req, res){
		console.log("made it to post /customer");
		customer.addCustomer(req, res);
	})

	app.post('/product', function(req, res){
		console.log("made it to post /product");
		product.addP(req, res);
	})

	app.post('/order', function(req, res){
		console.log("made it to post /order");
		order.addO(req, res);
	})

	app.get('/customers', function(req, res){
		console.log("made it to post /customer");
		customer.getCustomers(req, res);
	})

	app.get('/products', function(req, res){
		console.log("made it to post /customer");
		product.getP(req, res);
	})

	app.get('/orders', function(req, res){
		console.log("made it to get /orders");
		order.getO(req, res);
	})

	app.delete('/delete/customer/:id', function(req, res){
		console.log("made it to delete");
		customer.delete(req, res);
	})
}