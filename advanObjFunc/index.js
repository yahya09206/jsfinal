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
}