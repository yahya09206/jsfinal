// 'let' => new variable name declaration, reserved keyword
// String starts with a single qoute and ends with a single quote
// Can't define variable more than once
// There are rules related to variable names
let name = 'Yahya Hussein';
let firstName = 'Yahya';
let lastName = 'Hussein';
let fullName = firstName + ' ' + lastName;

// Print out of the contents of the variable 'name'
console.log(name);
console.log(fullName);

//Challenge 1
let city = 'Seattle';
let country = 'United States';
let location = city + ' ' + country;

console.log(location);

/************
	NUMBERS 
************/
let num = 5.5 + 2;
console.log(num);

let age = 28;
let dogYears = (age + 1) / 7;
console.log(dogYears);

// Numbers challenge
let studentScore = 41;
let maxScore = 100;
let percent = (studentScore / maxScore) * 100;

console.log(percent);

// Temperature conversion challenge to celsius
let fahrenheit = 50;
let celsius = (fahrenheit - 32) * 5 / 9;
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log(celsius);
console.log(kelvin);