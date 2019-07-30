// Closures

function retirement(retirementAge) {
	var a = ' years left until retirement';
	return function(yearOfBirth) {
		var age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1991);
retirementGermany(1991);
retirementIceland(1991);


//retirement(66)(1991);