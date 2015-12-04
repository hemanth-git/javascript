var stringInput = window.prompt("Enter list of numbers which are separated by comma(,)");
findingSumAndNearestZero(stringInput) ;
function findingSumAndNearestZero(stringInput) {
	var output = [];
	var sum = 0 ;
	var j = 0;
	stringInput = stringInput.split(',');
	var numberArray = [];
	for (var i = 0; i < stringInput.length; i++) {
		if (!isNaN(+stringInput[i])) {
			numberArray.push(+stringInput[i]);
		}

	}
	for (i = 0; i < numberArray.length; i++) {
		for (j = i+1; j < numberArray.length; j++) {
			var str = "";
			sum = numberArray[i] + numberArray[j];
			if (sum <= 5 && sum >=-5) {
				str = "The two elements whose sum is zero or nearest to zero are " + numberArray[i] + ", " + numberArray[j] + " sum is :" + sum+"\n";
				output.push(str);
				sum = 0 ;
			}
		}
	}
	window.alert(output);
}