// First class functions
var years  = [1990, 1965, 1937, 1991, 2006];

function arrayCalc(arr, fn){
	//loop over array
	//Create empty array
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		// Push result of fn and pass current input array
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(el) {
	return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log(ages);
console.log(fullAges);

