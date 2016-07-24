myApp.factory('productFactory', function($http){

	var products = [];

	var factory = {};

	factory.getProducts = function(callback){
		console.log("got to getProducts");
		$http.get('/products').then(function(data){
			products = data.data;
			callback(data.data);
		});
	}

	factory.addProduct = function(info, callback){
		console.log("addProduct on customerFactory");
		$http.post('/product', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				products.push(data)
				callback();
			}
		})
	}

	factory.delete = function(id, callback){
		console.log("delete on productFactory");
		$http.delete('/delete/product/'+ id).then(function(data){
			if(data.error){
				callback(data);
			} else {
				customers.push(data)
				callback();
			}
		})
	}

	return factory;
})