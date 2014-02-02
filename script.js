$(document).ready(function () {
	function rando(numelements){
		return numelements*Math.random(0,1);
	};
	var LorR = rando(1);	
	var left ="not " + thistopic.getName();
	var right="not " + thistopic.getName();
	if(LorR<.5)
		left = thistopic.getName();
	else right = thistopic.getName();
	document.getElementById('rightanswer').innerHTML= right;
	document.getElementById('leftanswer').innerHTML= left;
	alert("OH NOOOOO FUCKKKKKKK!!!!");
});

