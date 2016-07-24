myApp.controller('customerController', function($scope, $location, customerFactory){
	
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})


	$scope.addCustomer = function(){
		console.log("got to addCustomer");
		customerFactory.addCustomer($scope.cust, function(){
			console.log("added customer on controller");
			// $location.path("/");
			customerFactory.getCustomers(function(data){
			$scope.customers = data;
			$scope.cust = {};
	})
		})
	}

	$scope.delete = function(id){
		customerFactory.delete(id, function(){
			customerFactory.getCustomers(function(data){
			$scope.customers = data;
			})
		})
	}
})