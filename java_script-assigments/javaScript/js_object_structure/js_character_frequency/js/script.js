var input = window.prompt("Enter the array seperated by ',' ");
findMoreRepetitions(input);
function findMoreRepetitions(input) {
	var valuesMax = {
		'max1': 0, //maximum 1 number
		'max2': 0,  //maximum 2 number
		'max1value': 0, // frequency of max1
		'max2value': 0 // frequency of max2
	}
	var inputArray = input.split(',');
	var numberArray = [];
	var output = [];
	for (var i = 0; i <= inputArray.length; i++) {
		if (!isNaN(inputArray[i])) {
			numberArray.push(+inputArray[i]);
		}
	}
	numberArray.sort();
	var counter = 0;
	var temp;
	temp = numberArray[0];
	for (var i = 0; i <= numberArray.length; i++) {
		if (temp === numberArray[i]) {
			counter += 1;
		}
		else {

			var str = temp + " 's are=" + counter;//end of the previous integer
			output.push(str);
			checkMaximumFrequency(temp, counter);
			counter = 1;
			temp = numberArray[i];
		}
	}
	var difference =valuesMax.max1value-valuesMax.max2value;    //difference between maximum and minimum frequencies of numbers
	//var str = temp + " 's are=" + counter;
	//output.push(str);
	window.alert(output + ' ' + '\n 1st maximumum occurencesof -> '+valuesMax.max1+'  = '
	 + valuesMax.max1value + ' \n 2nd maximumum occurences -> '+valuesMax.max2+'  = ' + valuesMax.max2value+
	 '\n The number '+valuesMax.max1+' appears '+difference+' times more than any other elements');
	 
	 // function to check and replace the maximum occurences of a number.
	 
	function checkMaximumFrequency(num, value) {
		var tempNumber = num;
		var tempValue = value;
		if (valuesMax.max1value <= tempValue) {
			valuesMax.max2value = valuesMax.max1value;
			valuesMax.max1value = tempValue;
			valuesMax.max2 = valuesMax.max1;
			valuesMax.max1 = tempNumber;
		}
		else if (valuesMax.max2value <= tempValue) {
			valuesMax.max2value = tempValue;
			valuesMax.max2=tempNumber;
		}

	}

}
	