let name = '  Andrew Mead'

// length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Includes method
let password = 'ab123afasd098';
console.log(password.includes('password'));

// Trim method
console.log(name.trim());

let passwordCheck = function(password){
	if (password.length > 8 && !password.includes('password')) {
		return true;
	}else {
		return false;
	}
}

console.log(passwordCheck('asdfp'));
console.log(passwordCheck('abc123!@#$%^&'));
console.log(passwordCheck('password'));