
$('document').ready(game)
function game(){
	var queArr = [
		{
			question: 'Select a circle shape',
			answer: 'img1'
		}, {
			question: 'Select a rectangle shaped object',
			answer: 'img2'
		}, {
			question: 'Select a triangle shaped object',
			answer: 'img3'
		},
		{
			question: 'Select a square shaped object',
			answer: 'img4'
		}, {
			question: 'Select a  cloud',
			answer: 'img5'
		},
		{
			question: 'Select a flower plant',
			answer: 'img6'
		},
		{
			question: 'Select a tree',
			answer: 'img7'
		},
		{
			question: 'Select a crow',
			answer: 'img8'
		}
	];
	var answered = [];
	
	function init() {
		i=0;
		
		answered = [];
		var n = queArr.length;
		while (answered.length < n) {
			var num = Math.floor(Math.random() * (n));
			
			if (answered.indexOf(num) === -1) {
				answered.push(num);
			}
		}
		console.log(answered);
		callDisplayQuestion();
	}
	var i ;
	function callDisplayQuestion() {
		if (i=== answered.length) {
			displayScore(i);
			displayGameOver();
		}
		else {
			displayScore(i);
			$('.questions').html(queArr[answered[i]].question);
		}
	}
	$('a').click(function (event) {
		event.preventDefault();
		var prop = $(this).attr('href');
		if (queArr[answered[i]].answer === prop) {
			displayCorrect();
			i++;
			callDisplayQuestion();
		}
		else {
			displayWrong();	
		}
	});
	function displayCorrect() {
		$('.validate-div').text("Correct Answer");
	}
	function displayWrong() {
		$('.validate-div').text("Wrong Answer");
	}
	function displayGameOver(){
		$('.questions').html("Game Over");
	}
	$('#retake-test').click(function(event){
		event.preventDefault();
		init();
	});
	function displayScore(i){
		$('.score').html("Score "+i);
	}
	init();	
}