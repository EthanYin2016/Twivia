$(document).ready(function () {
	function rando(numelements){
		return numelements*Math.random(0,1);
	};
	var LorR = rando(1);
	var left ="not obama";
	var right="not obama";
	if(LorR<.5)
		left = obama.getName();
	else right = obama.getName();
	document.getElementById('rightanswer').innerHTML= right;
	document.getElementById('leftanswer').innerHTML= left;
	alert("OH NOOOOO FUCKKKKKKK!!!!");
});

