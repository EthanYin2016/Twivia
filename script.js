$(document).ready(function () {
	var topics= ["royal wedding", "boston", "new york"];
	var questionsend= [" most popular?", " first searched?"];
	function rando(numelements){
		return Math.floor(numelements*Math.random(0,1));
	};
	document.getElementById('question').innerHTML 
	= "When was " + topics[rando(3)] + questionsend[rando(2)];
});

