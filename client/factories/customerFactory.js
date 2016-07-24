myApp.factory('customerFactory', function($http){

	var customers = [];

	var factory = {};

	factory.getCustomers = function(callback){
		console.log("got to getCustomers");
		$http.get('/customers').then(function(data){
			customers = data.data;
			callback(data.data);
		});
	}

	factory.addCustomer = function(info, callback){
		console.log("addCustomer on customerFactory");
		$http.post('/customer', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				customers.push(data)
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