// Multiple Arguments
let add = function (a, b, c) {
	return a + b + c;
}

let result = add(10,1, 5);
console.log(result);

// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
	return 'Name: ' + name + ' Score: ' + score;
}

let scoreText = getScoreText(undefined, 4);
console.log(scoreText);

// Mulltiple params challenge 2
let getTip = function(total, percentage = .3){
	let tip = total * percentage;
	return tip;
}
console.log(getTip(40));