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
	//Arrays are 0 based
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//Change value of certain item in array
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

//'indexOf' is used to test/find if element is inside of array
console.log(john.indexOf(1990));

//Objects and Properties
//object literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
//Dot notation
console.log(john.firstName);
//Bracket notation
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

//Objects and Methods
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function(){
		this.age = 2019 - this.birthYear;
	}
};
john.calcAge();
console.log(john);



