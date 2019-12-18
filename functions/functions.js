// Function - input, code, output

let greetUser = function () {
	console.log("Welcome user!");
}

greetUser();

// Simple function to square a number
let square = function (num) {
	let result = num * num;
	return result;
}

let value = square(3);
console.log(value);

// Function challenge
let convert = function (temp) {
	let conversion = (temp - 32) * 5 / 9;
	return conversion;
}
let value2 = convert(32);
console.log(value2);