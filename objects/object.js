// Define object
let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

// Changing object properties
myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

// Object challenge
let myPerson = {
	name: 'Ali',
	age: 28,
	location: 'Seattle, WA'
};

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);

myPerson.age = 29;
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);