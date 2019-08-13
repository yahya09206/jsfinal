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
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
	}
}
driverLicense6(true);

// IIFE'S
// A block is not restricted to for loops and if statements

{
	const a = 1;
	let b = 2;
}
// console.log(a + b);

// Strings in es6
let firstName 	= 'john';
let lastName 	= 'smith';
const year 		= 1991;
function calcAge(year){
	return 2019 - year;
}

// Template literals for es6 lets you write all text and variable inside of back ticks
console.log(`This is ${firstName} ${lastName}. He was born in ${year}. Today he is ${calcAge(year)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('w'));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));

// Arrow functions	
const years = [1990, 1991, 1969, 1845];

//ES5
var ages5 = years.map(function(el) {
	return 2016 - el;
});
console.log(ages5);

//ES6 with arrow function
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// ES6 function with multiple params
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

// ES6 with more than 1 line
ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

// Arrow functions with lexical 'this' keyword. Share 'this' from es5
//es5 version
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		var self = this;
		// Attach event handler to element
		document.querySelector('.green').addEventListener('click', function(){
			var str = 'This box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
}

box5.clickMe();

// ES6 Syntax using 'this' keyword
// Arrow function shares lexical this keyword in its functions
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		// Attach event handler to element
		document.querySelector('.green').addEventListener('click', () => 
		{
			var str = 'This box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}

box6.clickMe();

function Person(name){
	this.name = name;
}
Person.prototype.myFriends5 = function(friends){
	var arr = friends.map(function(el) 
	{
		return this.name + ' is friends with ' + el;
	}.bind(this));

	console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6 syntax
Person.prototype.myFriends5 = function(friends){
	var arr = friends.map(el => 
	`${this.name} is friends with ${el}`);
	console.log(arr);
}
new Person('Mike').myFriends5(friends);

// Destructoring allows us to extract data from a data structure
// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6 
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
// 	firstName: 'John',
// 	lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// Arrays in ES6
// const boxes = document.querySelectorAll('.box');

// Return nodelist and transform into array
// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
// 	cur.style.backgroundColor = 'dodgerblue';
// });

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // Breaking from array
// for(var i = 0; i < boxesArr5.length; i++){
// 	// Check if element has class name on it
// 	if (boxesArr5[i].className === 'box blue') {
// 		continue;
// 	}

// 	boxesArr5[i].textContent = 'I changed to blue';
// }

// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // ES6 Version
// for(const cur of boxesArr6) {
// 	if (cur.className.includes('blue')) {
// 		continue;
// 	}
// 	cur.textContent = 'I changed to blue';

// }

// // Find elements in an array using es5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
// 	return cur >= 18;
// });
// console.log(full);
// // Find position of element in array
// console.log(full.indexOf(true));
// // Find oldest age in array
// console.log(ages[full.indexOf(true)]);

// // ES6 
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

// // Spread Operator
// function addFourAges (a, b, c, d) {
// 	return a + b + c + d;
// }
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // Pass entire array into function
// var ages = [18, 30, 12, 21];
// // Use apply method and then call function using params
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6 using spread operator
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily);

// // Use spread on nodelist
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');


// Rest parameters allow us to pass arbirtrary number of arguments into a function and to use them in function

function isFullAge5() {
	// console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);
	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= 18);
	});
}
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6 version
function isFullAge6(...years) {
	years.forEach(cur => console.log((2016 - cur) >= 18));
}	
isFullAge6(1990, 1999, 1965);

// Default 
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
	// Default Parameters using if statement
	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'american' : nationality = nationality;
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');









