// Multiple Arguments
let add = function (a, b, c) {
	return a + b + c;
}

let result = add(10,1, 5);
console.log(result);

// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
	return `Name: ${name} Score: ${score}`;
}

let scoreText = getScoreText(undefined, 4);
console.log(scoreText);

// Mulltiple params challenge 2
let getTip = function(total, percentage = .3){
	let tip = total * percentage;
	return tip;
}
console.log(getTip(40));

// Final Function Challenge
let testScore = function(studentScore, scorePossible) {
	let scores = studentScore / scorePossible;
	let finalScore = scores * 100;

	if (finalScore >= 90) {
		return 'You got an A' + '(' + finalScore + ')';
	} else if (finalScore < 90 && finalScore > 79) {
		return 'You got a B' + '(' + finalScore + ')';
	} else if (finalScore < 80 && finalScore > 69) {
		return 'You got a C' + '(' + finalScore + ')';
	} else if (finalScore < 70 && finalScore > 59) {
		return 'You got a D' + '(' + finalScore + ')';
	} else {
		return 'You got a F' + '(' + finalScore + ')';
	}
}

console.log(testScore(15, 20));
console.log(testScore(80, 120));
console.log(testScore(15, 30));
console.log(testScore(97, 100));