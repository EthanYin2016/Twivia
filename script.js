$(document).ready(function () {
	function rando(numelements){
		return numelements*Math.random(0,1);
	};
	document.getElementById('rightanswer').innerHTML 
	=topics[rando(3)] + questionsend[rando(2)];
	var LorR = doesitrando(1);
	if(LorR<.5
		)var left = obama.getName();
	var right = topics[1].name;
	
	$("#rightanswer").text(right);
	$("#leftanswer").text(left);
	alert("OH NOOOOO FUCKKKKKKK!!!!");
});

