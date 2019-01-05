// Functions
	// Used for repeating while keeping code clean and compact
	// Can pass 0-multiple arguments aka parameters and then return something from the function
	// Follow the DRY principle
	// Functions can call other functions
	// Don't have to return anything
function calculateAge(birthYear){	
	return 2019 - birthYear;
}
var ageJohn = calculateAge(1991);
var ageJan = calculateAge(1994);
var ageMary = calculateAge(1993);
console.log(ageJohn, ageJan, ageMary);

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log(firstName + ' retires in ' + retirement + ' years');
}

yearsUntilRetirement(1990, 'John');

// Function Statements and Expressions

//function expression doesnt have a name and is declared within a variable
var whatDoYouDo = function(job, firstName){
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives trucks like macminded';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));

// Arrays
	//Arrays allow you to store more values in one single variable
var names = 