
$('document').ready(game);
function game() {
	var ballNumber, score = 0;
	var time = 30;
	var value;
	var topMin, topMax, leftMin, leftMax;
	var $circleObject = $('#circleObject');
	var $score = $('.score');

	var balls = [
		{
			'color': 'red-class',
			score: -2
		}, {
			'color': 'violet-class',
			score: -1
		},
		{
			'color': 'yellow-class',
			score: 3
		},
		{
			'color': 'green-class',
			score: 2
		}, {
			'color': 'blue-class',
			score: 1
		}
	];
	var timePeriod = {
		'easy': {
			timeperiod: 1200,
			minimumLeft:350,
			maximumLeft:950,
			minimumTop:80,
			maximumTop:450
		},
		'medium': {
			timeperiod: 1000,
			minimumLeft:260,
			maximumLeft:1000,
			minimumTop:80,
			maximumTop:600,
		},
		'hard': {
			timeperiod: 750,
			minimumLeft:130,
			maximumLeft:1130,
			minimumTop:80,
			maximumTop:786
		}
	};
	var shapeModify = {
		circle: {
			'border-radius': '50%'
		},
		square: {
			'border-radius': 'none'
		}
	};
	
	$('#startGame').click(function (event) {
		event.preventDefault();
		
		var level = $(".diffLevel input[type='radio']:checked").val();
		var duration = $("#txtDuration").val();
		duration = +duration;// check for validation
		validateDuration(duration);
		var shape = $(".shapeSelect input[type='radio']:checked").val();
		console.log(level + " " + duration + " " + shape);
		//customizeValue(level,duration,shape);
		$('.form-main-div').hide();
		$('.game-container').addClass(level).show();
		var interval = (timePeriod[level].timeperiod);
		console.log(interval);
		value = setInterval(changeProp, interval);
		//time = duration;
		$circleObject.css(shapeModify[shape]);
		topMin=timePeriod[level].minimumTop;
		topMax=timePeriod[level].maximumTop;
		leftMin=timePeriod[level].minimumLeft;
		 leftMax=timePeriod[level].maximumLeft

	});
	function changeProp() {
		ballNumber = Math.floor(Math.random() * (balls.length));
		var leftPosition = Math.floor(Math.random() * (leftMax - leftMin)) + leftMin;
		var topPosition = Math.floor(Math.random() * (topMax - topMin)) + topMin;
		$circleObject.removeClass();
		$circleObject.addClass(balls[ballNumber].color);
		$circleObject.css('left', leftPosition + 'px');
		$circleObject.css('top', topPosition + 'px');
		$score.html("Score : " + score);

		$('.timer-div').html("Timeleft : " + time + " sec's");
		time--;
		if (time < 10) {
			$('.timer-div').css('color', '#c90202')
		}
		if (time < 0) {
			$circleObject.hide();
			$('.game-over').show().html("Game Over !!<br>" + "Score is: " + score);
			clearInterval(value);
		}
	}
	$circleObject.click(function () {
		score += balls[ballNumber].score;
		console.log(score);
	});
	function validateDuration(duration){
		if(isNaN(duration)){
			time=90;
		}
		else if(duration<30){
			time=90;
		}
		else if(duration>120){
			time=90;
		}
		else{
			time=duration;
		}
	}
}

