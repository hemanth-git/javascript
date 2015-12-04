function dateOfBirthApplication(){
	
	var dOb= {
		date:new Date()
	};
	var dateArr=[];
	mainProgram();
	function mainProgram(){
		var welcomeMsg = 'Welcom to birthday Application\n\n' +
			'Enter the Date of Birth to get details Date Format(MM-YYYY-DD)';
		var dateOfBirth=prompt(welcomeMsg);
		if(checkIfValid(dateOfBirth)){
			var displayString=getDetails();
			alert(displayString);
		}
		else{
			alert("Invalid date of birth");
		}
	}

	function checkIfValid(dateOfBirth){
		var dateSplitting=dateOfBirth.split('-');
		if(dateSplitting.length === 3){
			for(var i=0;i<dateSplitting.length;i++ ){
				if(isNaN(+dateSplitting[i])){
					return false;
				}
				else if(i === 0){
					if(dateSplitting[0]>12 || dateSplitting[0]<0){
						return false;
					}
				}
				else if(i=== 1){
					if(dateSplitting[1]<1970){
						return false;
					}
				}
				else{
					var temp=+dateSplitting[i];
					dateArr[i]=temp;
				}
			}
			return true;
		}
		else{
			return false;
		}
	}
	function getDetails(){
		dOb.date.setMonth(dateArr[0]-1);
		dOb.date.setFullYear(dateArr[1]);
		dOb.date.setDate(dateArr[2]);
		var currDate =new Date();
		var difference=(currDate.getTime()-dOb.date.getTime());
		var seconds=Math.floor(difference/1000);
		var minutes=Math.floor(seconds/60);
		var hours = Math.floor(minutes/60);
		var days = Math.floor(hours/24);
		var str='days -> '+ days +'\nhours -> '+ hours +' \nminutes -> '+ minutes +' \nseconds-> '+ seconds;
		return str;
	}	
}
dateOfBirthApplication();

