function mainProgram() {
	
	var places=[{
		station:'Begumpet',
		distance:0,
		position:1
	},
	{
		station:'Fatehnagar',
		distance:8,
		position:2
	},
	{
		station:'HITEC City',
		distance:4,
		position:3
	},
	{
	
		station:'Hafizpet',
		distance:7,
		position:4
	},
	{
		station:'Chandanagar',
		distance:5,
		position:5
	},
	{
		station:'Lingampally',
		distance:7,
		position:6
	}
	];
	
	var start=prompt("Enter the start point");
	start=start.toLowerCase();
	var end = prompt("Enter the end point");
	end=end.toLowerCase();
	var numberOfPeople=prompt("Enter the number of people going to travel");
	numberOfPeople=+numberOfPeople;
	if((typeof start !=='string' || typeof end !== 'string')|| start === end || numberOfPeople <= 0  ){
		alert("Wrong inputs are given")
	}
	else{
		var speedToBegumpet=60;
		var speedToLingampally=72;//per 1km
		var startPosition;
		var endPosition;
		var totalFare=0;
		
		for(var i=0;i<places.length;i++){
			if(((places[i].station).toLowerCase()) === start) {
				startPosition=places[i].position;
			}
			if(((places[i].station).toLowerCase()) === end) {
				endPosition=places[i].position;
				
			}
		}
		var totalDistance=0;
		var totaltime=0;
		if(startPosition<endPosition) {
			
			for(var i = startPosition; i <= endPosition ;i++){
				totalDistance+=places[i].distance;	
			}
			totaltime+=speedToLingampally*totalDistance;
			
		}
		else{
			for(var i = startPosition; i >= endPosition ;i--){
				totalDistance+=places[i].distance;
			}
			totaltime+=speedToBegumpet*totalDistance;
		}
		totaltime/=60
		totalFare=(2*totalDistance)*numberOfPeople;
		prompt("From : "+start+"\nTo : "+end+" Total fare "+totalFare+"\nTotal time "+totaltime+" minutes"+"Total distance "+totalDistance);

	}
}

mainProgram();