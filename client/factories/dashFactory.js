myApp.factory('dashFactory', function($http){

	var customers = [];

	var factory = {};

	factory.getDummies = function(callback){
		$http.get('/dummies').then(function(data){
			mongooses = data.data;
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

	return factory;
})