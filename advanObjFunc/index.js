// Advance Objects and Functions

// Function Constructor
var john = {
	name: 'John',
	yearOfBirth: 1991,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);
	}
}

// Create new john object using constructor 
var john = new Person('John', 1990, 'Teacher');
john.calculateAge();

