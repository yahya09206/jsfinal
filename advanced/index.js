//Hoisting
	//only works with function declarations
calculateAge(1965);
function calculateAge(year){
	console.log(2018 - year);
}

//retirement(1965);
var retirement = function(year){
	console.log(65 - (2018 - year));
}

// variables
var age = 23;
console.log(age);