$(document).ready(function () {
	var topics= ["royal wedding", "boston", "new york"];
	var questionsend= [" most popular?", " first searched?"];
	function rando(numelements){
		return Math.floor(numelements*Math.random(0,1));
	};
	function fake_date_make{
		return "02042005";
	};
	var fake_date = fake_date_make();
	document.getElementById('question').innerHTML 
	= "When was " + topics[rando(3)] + questionsend[rando(2)];
	document.getElementById('leftanswer').innerHTML= fake_date;
});

