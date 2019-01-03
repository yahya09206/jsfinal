// Basics of JavaScript
// What is javascript?
	// Lightweight meaning it doesn't take up much memory/simple syntax and features
	// Cross-platform meaning it can be used on multiple systems
	// Object-oriented
	// Used to only be a client side language
	// Adds dynamic effects and interactivity
	// Has a bunch of frameworks and libraries
	// Different versions such as es5/6/2015/2017 etc

// A variable is a container that has a value inside which can be used over and over again
// Declare a variable
	// 'var' keyword
	// name of variable
	// '=' what you want the value to be
	// Variables can't start with symbols other than $ or _ letters
	// Can't use reserved words as variable names such as 'function'
	// Can init multiple variables on the same line then declare on different lines

// There are 5 different datatypes
	// Number - Floating point numbers, for decimals and integers
	// String - Sequence of characters, used for text
	// Boolean - Logical data type that can only be true or false
	// Undefined - Data type of a variable that does not have a value yet
	// Null - Also means 'non existent'

/******************
	Variables
******************/
// // Variable Declaration
// var firstName = 'John';	
// var age = 28;
// var fullAge = true;

// // Undefined variable
// var job;
// console.log(job);
// // Fixed
// job = 'Teacher';
// console.log(job);

// // Write to the console
// console.log(fullAge);

// /******************
// *Mutation & Type Coercion
// ******************/
// // What is type coercion
// 	// JS automatically converts types to where it's needed

// var firstName = 'john';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Mutation
// age = 'twenty eight';
// job = 'driver';
// // alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// // var lastName = prompt("What is his last name?");
// // console.log(firstName + ' ' + lastName);

// /******************
// Basic Operators
// ******************/
// var year, yearJohn, yearMark;
// var year = 2018;
// ageJohn = 28;
// ageMark = 33;

// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log(yearJohn);
// console.log(year + 2);
// console.log(year * 2);

// //Logical operators
// var jonhOlder = ageJohn < ageMark;
// console.log(jonhOlder);

// //typeof operator tells you which datatype it is
// console.log(typeof jonhOlder);
// console.log(typeof ageJohn);

/******************
Operator Precedence
******************/
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// //Average
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

/******************
Control Structures
******************/
// Controls how your program is written

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried === true) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

/******************
Boolean Logic
******************/

var firstName = 'John';
var age = 16;
if(age < 13){
	console.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20 ) {
	console.log(firstName + ' is a teenager.');
}else{
	console.log(firstName + ' is a man.');
}

/******************
Ternary Operator & switch statements
******************/
// Used for simple conditions to keep code more compact
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/******************
Switch Statement
******************/

var job = 'teacher'
switch(job) {
	case 'teacher':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drive an uber in Lisbon');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;
}





