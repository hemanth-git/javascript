
$('document').ready(
	function () {
		eventListnersCustom();
	});
var links = {
	'register': {
		'divtoshow': 'display-register'
	},
	'whoAreWe': {
		'divtoshow': 'display-whoarewe'
	},
	'careers': {
		'divtoshow': 'display-careers'
	}
};
var divDisplay = {
	'register': {
		'divtoshow': 'register-tab'
	},
	'whoAreWe': {
		'divtoshow': 'who-are-we-tab'
	},
	'careers': {
		'divtoshow': 'careers-tab'
	}
};
var rightContainers = {
	'topDiv': {
		'divToShow': 'topDivDetails',
		'position':{
			'top':'120px',
			'left':'120px'
			}
	},
	'middleDiv': {
		'divToShow': 'middleDivDetails',
		position:{
			'top':'270px',
			'left':'120px'
		}
	},
	'bottomDiv': {
		'divToShow': 'bottomDivDetails',
		position:{
			'top':'440px',
			'left':'120px'
			}
	}
};

var errorMessages={
		text:{
			errornull:'Name should not be null'	
		},
		'select-one':{
			errornull:'Please select a option'
		},
		'file':{
			errornull:'Please upload a pictre'
		},
		'checkbox':{
			errornull:'Please agree terms and conditions'
		},
		'radio':{
			errornull:'Please select your gender'
		}
};
function eventListnersCustom() {

	$('a').hover(function () {
		var param = $(this).attr('href');
		$('#' + links[param].divtoshow).show();
	}).mouseout(function () {
		var param = $(this).attr('href');
		$('#' + links[param].divtoshow).hide();
	}).click(function (event) {
		event.preventDefault();
		$('.hide-div').hide();
		$('.tab-nav').removeClass('onclick-decorate');
		var prop = $(this).attr('href');
		console.log(prop);
		$('#' + prop).addClass('onclick-decorate');
		$('#' + divDisplay[prop].divtoshow).show();
		
	});
	$('.sub-left-container').click(function () {
		$('.rightText').hide();
		var clickId = $(this).attr('id');
		$('#' + rightContainers[clickId].divToShow).show();
		console.log('#' + rightContainers[clickId].divToShow);
		$('.arrow-div').css(rightContainers[clickId].position);
		
	});
	
	
	 $('#submitBtn').click(function(event){
		 event.preventDefault();
		 //var $formElements=$(':input').serializeArray();
		 var $formText=$('input:text');
		 for(var i=0;i<$formText.length;i++){
			 validateText($formText[i]);
		 }
		 var $dropDowns =$('select');
		 for(var i=0;i<$dropDowns.length;i++){
			var $selectValue=$dropDowns[i];
			validateDropDown($selectValue,i);
		 }
		 var $inputFile=$('input:file');
		 for(var i=0;i<$inputFile.length;i++){
		 	validateFiles($inputFile[i]);
		 }
		 var $checkBoxDeclare=$('[name="declare"]');
		 for(var i=0;i<$checkBoxDeclare.length;i++){
		 	validateCheckBox($checkBoxDeclare,i);
		 }
 		 var $radioChecks=$('[name="gender"]');
		  checkRadio($radioChecks);
	 });
}

function validateText($formTextArr){	
	if($formTextArr.value.length===0){
		 var idName=$formTextArr.id;
		 var typeCame=$formTextArr.type;
		 var msg=errorMessages[typeCame].errornull;
		  $("#"+idName).addClass('error-border');
		  $("#"+idName).parents('.form-element').addClass('error-font');
		  $($("#"+idName).parent()).append('<br><span>'+msg+'</span>');
	}
}
function validateDropDown($selectValue,i){
	if($selectValue.value === "-1"){
		 var idName=$selectValue.id;
		 var typeCame=$selectValue.type;
		 var msg=errorMessages[typeCame].errornull;
		 $("#"+idName).addClass('error-border');
		 $("#"+idName).parents('.form-element').addClass('error-font');
		  $($("#"+idName).parent()).append('<br><span>'+msg+'</span>');
		 
	}
}
function validateFiles($inputFile){
	if($inputFile.files.length === 0){
		var idName=$inputFile.id;
		 var typeCame=$inputFile.type;
		 var msg=errorMessages[typeCame].errornull;
		 $("#"+idName).addClass('error-border');
		 $("#"+idName).parents('.form-element').addClass('error-font');
		  $($("#"+idName).parent()).append('<br><span>'+msg+'</span>');
	}
}
function validateCheckBox($checkBoxDeclare,i){
	if($checkBoxDeclare.eq(i).is(':checked')===false){
		var idName=$checkBoxDeclare.attr('id');
		 var typeCame=$checkBoxDeclare.attr('type');
		 var msg=errorMessages[typeCame].errornull;
		 $("#"+idName).addClass('error-border');
		$("#"+idName).parents('.form-element').addClass('error-font');
		  $($("#"+idName).parent()).append('<br><span>'+msg+'</span>');
	}
}
function checkRadio($radioChecks){
	if($radioChecks.is(':checked')=== false){
		var idName=$radioChecks.attr('id');
		 var typeCame=$radioChecks.attr('type');
		 var msg=errorMessages[typeCame].errornull;
		 $("#"+idName).addClass('error-border');
		  $("#"+idName).parents('.form-element').addClass('error-font');
		  $($("#"+idName)).append('<br><span>'+msg+'</span>');
	}
}