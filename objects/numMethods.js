// challenge
let makeGuess = function(num){
	let min = 0;
	let max = 5;
	let guess = Math.floor(Math.random() * (max - min + 1) + min);
	if (num === guess) {
		return true;
	} else {
		return false;
	}
}

console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));
console.log(makeGuess(1));
