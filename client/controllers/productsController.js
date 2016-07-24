myApp.controller('productsController', function($scope, productFactory){

	productFactory.getProducts(function(data){
		console.log("getProducts on controller");
		$scope.products = data;
	})

	$scope.addProduct = function(){
		console.log("got to addProduct");
		productFactory.addProduct($scope.product, function(){
			console.log("added product on controller");
			productFactory.getProducts(function(data){
			$scope.products = data;
			$scope.product = {};
	})
		})
	}
	
})