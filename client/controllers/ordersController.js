myApp.controller('ordersController', function($scope, orderFactory, customerFactory, productFactory){

	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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

	$scope.addOrder = function(){
		console.log("got to addOrder", $scope.order);
		$scope.order.customer= $scope.order.cust.name;
		$scope.order.product= $scope.order.product.name;
		console.log("customer: ", $scope.order.customer);
		orderFactory.addOrder($scope.order, function(data){
			console.log(data);
			orderFactory.getOrders(function(data){
			console.log("getOrders on controller");
			$scope.orders = data;
			$scope.order = {};
	})
	})
	}
})