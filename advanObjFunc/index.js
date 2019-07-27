// Advance Objects and Functions

// Function Constructor
/*
var john = {
	name: 'John',
	yearOfBirth: 1991,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	// this.calculateAge = function() {
	// 	console.log(2019 - this.yearOfBirth);
	// }
}

Person.prototype.calculateAge  = function() {
	console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// Create new john object using constructor 
var john = new Person('John', 1990, 'Teacher');
john.calculateAge();

var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Inheritance using Object.create, inherits directly from passed argument
var personProto = {
	calculateAge: function(){
		console.log(2019 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
	name: { value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: {value: 'Designer'}
});
