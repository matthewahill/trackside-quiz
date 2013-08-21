var score=0;
var handscore=0;

/// Question #1 - flags 
$(function(){
  	 
$('.submit1').click(function(e) {
	
	window.localStorage.setItem("flagsone",$('input[name="flag-q-1"]:checked + label').text());
				
		if (($('input[name=flag-q-1]:checked').val()) == 'double') {
    	     	score ++;
				return score;
			} else {
			return;
		}
   	});
}); 

/// Question #2 - Flags
$(function(){
  
$('.submit2').click(function(e) {

	window.localStorage.setItem("flagstwo",$('input[name="flag-q-2"]:checked + label').text());
		
		if (($('input[name=flag-q-2]:checked').val()) == 'red') {
     		     score ++;
				return score ;
			} else {
			return;
		}
	});
}); 

/// Question #3 - Flags
$(function(){
 
$('.submit3').click(function(e) {

	window.localStorage.setItem("flagsthree",$('input[name="flag-q-3"]:checked + label').text());		

		if (($('input[name=flag-q-3]:checked').val()) == 'white') {
     	     	score ++;
				return score;
			} else {
			return;
		}
	});
}); 

/// Question #4 - Flags
$(function(){
	
$('.submit4').click(function(e) {

	window.localStorage.setItem("flagsfour",$('input[name="flag-q-4"]:checked + label').text());
		
        if (($('input[name=flag-q-4]:checked').val()) == 'blue') {
					score ++;
					return;
			} else {
			return;
		}
	});
}); 
	
/// Question #5 - Flags
$(function(){
  	
$('.submit5').click(function(e) {

	window.localStorage.setItem("flagsfive",$('input[name="flag-q-5"]:checked + label').text());
		
         if (($('input[name=flag-q-5]:checked').val()) == 'green') {
					score ++;
					return;
			} else {
			return;
		}
	});
}); 


/// Flag Results
$(function(){ 
		
$('#flagscores').click(function(e) {
   	document.getElementById('flag1choice').innerHTML = "Q1. You selected " + window.localStorage.getItem("flagsone") + ". The Correct answer is Double Yellow";
	document.getElementById('flag2choice').innerHTML = "Q2. You selected " + window.localStorage.getItem("flagstwo") + ". The Correct answer is Red";
	document.getElementById('flag3choice').innerHTML = "Q3. You selected " + window.localStorage.getItem("flagsthree") + ". The Correct answer is White";
	document.getElementById('flag4choice').innerHTML = "Q4. You selected " + window.localStorage.getItem("flagsfour") + ". The Correct answer is Blue";
	document.getElementById('flag5choice').innerHTML = "Q5. You selected " + window.localStorage.getItem("flagsfive") + ". The Correct answer is Green";
	document.getElementById('totalscore').innerHTML = "For this part of the quiz you scored " + score +" out of 5 points.";
    });

});

/// Question #1 - Handsignals 
$(function(){
    //correct answers stored here by id
   
$('.handsignalsubmit1').click(function(e) {
        
	window.localStorage.setItem("handsignalone",$('input[name="handsignal-q-1"]:checked + label').text());
		
			if (($('input[name=handsignal-q-1]:checked').val()) == 'medical') {
     		     	handscore ++;
					return handscore;
			} else {
			return;
		}
	});
}); 

/// Question #2 - Handsignals
$(function(){

$('.handsignalsubmit2').click(function(e) {

	window.localStorage.setItem("handsignaltwo",$('input[name="handsignal-q-2"]:checked + label').text());
		
        if (($('input[name=handsignal-q-2]:checked').val()) == 'flat tow') {
					handscore ++;
					return handscore;
			} else {
			return;
		}
	});
}); 

/// Question #3 - Handsignals
$(function(){
   
$('.handsignalsubmit3').click(function(e) {

 		window.localStorage.setItem("handsignalthree",$('input[name="handsignal-q-3"]:checked + label').text());
		
		if (($('input[name=handsignal-q-3]:checked').val()) == 'safe to cross') {
					handscore ++;
					return handscore;
			} else {
			return;
		}
	});
});

/// Question #4 - Handsignals
$(function(){
 	 
$('.handsignalsubmit4').click(function(e) {
		
	window.localStorage.setItem("handsignalfour",$('input[name="handsignal-q-4"]:checked + label').text());
		
        if (($('input[name=handsignal-q-4]:checked').val()) == 'rescue') {
     		     	handscore ++;
					return handscore;
			} else {
			return;
		}
	});
}); 

/// Question #5 - Handsignals
$(function(){

$('.handsignalsubmit5').click(function(e) {
		
	window.localStorage.setItem("handsignalfive",$('input[name="handsignal-q-5"]:checked + label').text());
		
		if (($('input[name=handsignal-q-5]:checked').val()) == 'oil') {
     		     	handscore ++;
					return handscore;
			} else {
			return;
		}
	});
}); 

  /// Hand Signal Results
$(function(){ 
		
$('#handsignalscores').click(function(e) {
    var total = handscore + score;
	document.getElementById('hand1choice').innerHTML = "Q1. You selected " + window.localStorage.getItem("handsignalone") + ". The Correct answer is Medical Required";
	document.getElementById('hand2choice').innerHTML = "Q2. You selected " + window.localStorage.getItem("handsignaltwo") + ". The Correct answer is Flat Tow";
	document.getElementById('hand3choice').innerHTML = "Q3. You selected " + window.localStorage.getItem("handsignalthree") + ". The Correct answer is Safe to Cross";
	document.getElementById('hand4choice').innerHTML = "Q4. You selected " + window.localStorage.getItem("handsignalfour") + ". The Correct answer is Rescue Required";
	document.getElementById('hand5choice').innerHTML = "Q5. You selected " + window.localStorage.getItem("handsignalfive") + ". The Correct answer is Oil on the Track";
	document.getElementById('totalhandscore').innerHTML = "For this quiz you scored " + handscore +" out of 5 points. That makes a total of " + total + " out of 10 points";
    });
});

/// Reset Flags Quiz
$(function(){ 
		
$('#resetmenu').click(function(e) {
   	score=0;
	handscore=0;
	window.localStorage.clear();
	document.getElementById('resettext').innerHTML =  'Both quizzes have been reset.';
	return;
    });
});

