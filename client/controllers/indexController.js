myApp.controller('indexController', function($scope, productFactory, customerFactory, orderFactory, dashFactory){
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.number = 3;
	$scope.getNumber = function(num) {
    return new Array(num);   
	}

	productFactory.getProducts(function(data){
		console.log("getProducts on controller");
		$scope.products = data;
	})

	orderFactory.getOrders(function(data){
		console.log("getOrders on controller");
		$scope.orders = data;
	})

})