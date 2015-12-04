function birthDayApp() {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
		'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	var birthdays = [{
		name: 'Abijeet Patro',
		dateOfBirth: new Date(1990, 7, 9)
	}, {
			name: 'Brendan',
			dateOfBirth: new Date(1993, 11, 20)
		}, {
			name: 'Jalal',
			dateOfBirth: new Date(1994, 8, 13)
		},{
			name: 'Hemanth',
			dateOfBirth: new Date(1993, 8, 13)
		},
		 {
			name: 'Nitin',
			dateOfBirth: new Date(1992, 8, 7)
		}, {
			name: 'Vishnu',
			dateOfBirth: new Date(1993, 0, 5)
		}, {
			name: 'Harish',
			dateOfBirth: new Date(1992, 5, 19)
		},
		{
			name: 'Hasnu',
			dateOfBirth: new Date(1992, 11, 19)
		},{
			name: 'Abijeeth',
			dateOfBirth: new Date(1992, 11, 19)
		}
		];

	var operations = [{
		'operation': getBirthdaysNextMonth,
		'message': 'Friends whose birthday is next month -',
		'responseOp': showResponse,
		'emptyMsg': 'No friends have birthday on a Sunday.'
	}, {
			'operation': getBirthdaysOnSun,
			'message': 'Friends whose birthday is on a Sunday -',
			'responseOp': showResponse,
			'emptyMsg': 'No friends have birthday on a Sunday.'
		}, {
			'operation': getBirthdaysOnSameDay,
			'message': 'Friends who have birthday\'s on the same day -',
			'responseOp': showResponse,
			'emptyMsg': 'No friends have birthday on a Sunday.'
		}, {
			'operation': getNextBirthday,
			'message': 'Friend whose birthday is upcoming - ',
			'responseOp': showResponseNearest,
			'emptyMsg': 'No friends have birthday on a Sunday.'
		}];

	function init() {
		var welcomeMsg = 'Hey! Welcome to the birthday app.\n' +
			'How can I help you today?\n\n ' +
			'1. Would you like to view friends whose birthday is next month?\n ' +
			'2. Would you like to view friends whose birthday is on a Sunday this year?\n' +
			'3. Would you like to view friends who have their birthday on the same day?\n' +
			'4. The next upcoming birthday.\n' +
			'5. Bye Bye';
		var userResponse = null;
		do {
			userResponse = window.prompt(welcomeMsg);
			userResponse = +userResponse;
			if (isNaN(userResponse) || userResponse <= 0 || userResponse > 5) {
				alert('I don\'t recognize that choice! Please enter again...');
			} else {
				// Check if user choose to exit.
				if (userResponse !== 5) {
					var response = operateOnChoice(userResponse);
					if (!response) {
						alert('I\'m sorry, I had some problems completing your request!');
					}
				}
			}
		} while (userResponse !== 5);
		
		alert('Bye Bye! :)');
	}

	function operateOnChoice(userResponse) {
		--userResponse;
		if (typeof operations[userResponse] === 'undefined') {
			return false;
		}
		try {
			var operationObj = operations[userResponse];
			var response = operationObj.operation();
			operationObj.responseOp(response, operationObj);
		} catch (e) {
			console.error(e);
			window.alert('I\'m sorry! There was an error while processing your request. ' +
				'Some technical details of the error are as follows - \n\n' + JSON.stringify(e));
		}
		return true;
	}

	function showResponse(response, operationObj) {
		var displayMsg = operationObj.message + '\n\n';
		if (response.length === 0) {
			displayMsg = operationObj.emptyMsg;
		} else {
			for (var i = 0; i !== response.length; ++i) {
				displayMsg += response[i].name + ' - '
				+ formatDateObj(response[i].dateOfBirth) + '\n';
			}
		}
		alert(displayMsg);
	}

	function showResponseNearest(response,operationObj) {
		var displayMsg = operationObj.message + '\n\n';
		if (response.length === 0) {
			displayMsg = operationObj.emptyMsg;
		} else {
				
			for (var i = 0; i !== response.length; ++i) {
				displayMsg += response[i].name + ' - '
				+ formatDateObj(response[i].dateOfBirth) +", Number of days "+response[i].numberOfdays+ ".\n";
			}
		}
		
		
		alert(displayMsg);	
	}
// function to get birthdays on next month.

	function getBirthdaysNextMonth() {
		var nextMonthBirthdays=[];
		var curMonth= new Date().getMonth();
		var nextMonth=curMonth+1;
		for(var i=0;i< birthdays.length;i++) {
			var currFriend=birthdays[i];
			/*var nextMonthFriend={
				name:'',
				dateofbirth:new Date()
			};*/
			if (!currFriend.dateOfBirth) {
				continue;
			}
			if(nextMonth === currFriend.dateOfBirth.getMonth()){
					nextMonthBirthdays.push(currFriend);
			}	
		}
		console.log(nextMonthBirthdays);
		return nextMonthBirthdays;
		
	}

	function getBirthdaysOnSun() {
		var bdaysNotOnSun = [];
		for (var i = 0; i !== birthdays.length; ++i) {
			var currFriend = birthdays[i];
			if (!currFriend.dateOfBirth) {
				continue;
			}
			var dob = new Date(currFriend.dateOfBirth.getTime());
			dob.setFullYear(new Date().getFullYear());
			if (dob.getDay() === 0) {
				bdaysNotOnSun.push(currFriend);
			}
		}
		return bdaysNotOnSun;
	}
// Birthdays on same day
	function getBirthdaysOnSameDay() {
		var birthdayOnSameDay=[];
		for(var i=0;i<birthdays.length;++i){
			var curFriend=birthdays[i];
			var curFriendDate =formatMonthAndDate(curFriend.dateOfBirth);
			console.log(curFriendDate);
			for(var j=0;j<birthdays.length;j++) {
				var nextFriend=birthdays[j];
				var nextfriendDate=formatMonthAndDate(nextFriend.dateOfBirth);
				console.log(nextfriendDate);
				if(i!=j && curFriendDate === nextfriendDate  ){
					birthdayOnSameDay.push(curFriend);
					break;
				}
			}
			
		}
		return birthdayOnSameDay;
	}
// Get nearest birthdays
	function getNextBirthday() {
		var nextnearestBirthday=[];
		var finalOutput=[];
		var currentDate=new Date();
		var days=[];
		for(var i=0;i<birthdays.length;++i) {
			var curFriend=birthdays[i];
			var nearestFriend={
				name:'',
				dateOfBirth:new Date(),
				numberOfdays:0
			};
			var dob = new Date(curFriend.dateOfBirth.getTime());
			dob.setFullYear(new Date().getFullYear());
			var difference = dob-currentDate;
			if(difference>0){
				nearestFriend.name=curFriend.name;
				nearestFriend.dateOfBirth=curFriend.dateOfBirth;
				nearestFriend.numberOfdays=Math.floor(difference/(1000*60*60*24));
				nextnearestBirthday.push(nearestFriend);
				days.push(difference/(1000*60*60*24));
			}
		}
		var temp=nextnearestBirthday[0];
		for( var i=1; i<nextnearestBirthday.length;i++){
			if(nextnearestBirthday[i].numberOfdays<=temp.numberOfdays) {
				if(nextnearestBirthday[i].numberOfdays === temp.numberOfdays){
					finalOutput.push(temp);
				}
				temp=nextnearestBirthday[i];
			}
		}
		finalOutput.push(temp);
		return finalOutput;
	}

// to change date object to string of date and month
	function formatMonthAndDate(dtObj) {
		var month = months[dtObj.getMonth()];
		var date = dtObj.getDate();
		return date + ' '+month;
	}
// to change date object to string of date , month and year
	function formatDateObj(dtObj) {
		var dobMonth = months[dtObj.getMonth()];
		var fullYear = dtObj.getFullYear();
		var dateOfMonth = dtObj.getDate();
		return dobMonth + ' ' + dateOfMonth + ', ' + fullYear;
	}

	init();
}

birthDayApp();

/*console.log(finalOutput);
		nextnearestBirthday.sort(function(a, b) {
   		 return parseFloat(a.numberOfdays) - parseFloat(b.numberOfdays);
		});*/