shopKepperAppilication();
function shopKepperAppilication() {
	var productName = window.prompt("Enter the product name.");
	var products = [{
		name: 'Santoor',
		price: 25
	}, {
			name: 'Lux',
			price: 30
		},
		{
			name: 'BRU',
			price: 30
		},
		{
			name: 'Tea',
			price: 30
		}

	];
	var customerNameInput;
	var customers = ["hemanth", "siva", "jalal", "raj kumar", "abijeet"];
	var flag = false;
	var productPrice,totalProductCost;
	var quantity;
	
	for (var i = 0; i < products.length; i++) {
		if (productName === (products[i].name.toLowerCase())) {
			productPrice=products[i].price;
			flag = true;
			break;
		}
	}
	if (!flag) {
		alert("Product not available");
	}
	else {
		customerNameInput = window.prompt("Enter the customer name.");
		quantity = window.prompt("Enter the quantity of the product.");
		quantity = +quantity;
		if (isNaN(quantity) || quantity <= 0) {
			alert("Quantity is not a number");
		} else {
			totalProductCost=productPrice*quantity;
			checkDiscount(customerNameInput,quantity)
		}
	}
	function checkDiscount(name,quantity){
		name=name.toLowerCase();
		var totalPurchaseCost=0;
		var discount=0;
		if(customers.indexOf(name) != -1){
			discount+=5;
		}
		else{
			discount+=2;
		}
		if(quantity>=5){
			discount+=2;
		}
		totalPurchaseCost=((100-discount)/100)*totalProductCost;
		alert("ProductName "+productName+"\n quantity "+quantity+" \nTotal product cost "
		+totalProductCost+"\n Total purchasing cost with discount: "+totalPurchaseCost);
	}

}
