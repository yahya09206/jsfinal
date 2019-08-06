// Variable declarations with let and const
/*
// ES5 Declaration
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 declaration
// const aka constant is for when you don't want to change a value
// let is used as the es5 var
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
*/

// Driver license function
// Block is all the code that is wrapped between curly braces. Variable declared with let and const can't be accessed outside of block
// Can't define a 'const' outside of a block
function driverLicense5(passedTest) {
	if (passedTest) {
		var firstName = 'John';
		var yearOfBirth = 1990;

	}
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driverLicense5(true);

// ES6 function syntax
// Driver license function
function driverLicense6(passedTest) {
	if (passedTest) {
		let firstName = 'John';
		const yearOfBirth = 1990;
	}
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driverLicense6(true);