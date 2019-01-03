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