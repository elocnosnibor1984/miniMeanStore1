myApp.factory('orderFactory', function($http){

	var orders = [];

	var factory = {};

	factory.getOrders = function(callback){
		console.log("got to getOrders");
		$http.get('/orders').then(function(data){
			orders = data.data;
			callback(data.data);
		});
	}

	factory.addOrder = function(info, callback){
		console.log("addOrder on orderFactory");
		$http.post('/order', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				orders.push(data);
				callback();
			}
		})
	}

	factory.delete = function(id, callback){
		console.log("delete on customerFactory");
		$http.delete('/delete/customer/'+ id).then(function(data){
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