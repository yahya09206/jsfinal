// // First class functions
// var years  = [1990, 1965, 1937, 1991, 2006];

// function arrayCalc(arr, fn){
// 	//loop over array
// 	//Create empty array
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		// Push result of fn and pass current input array
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2019 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81) {
// 		return Math.round(206.9 - (0.67 * el));
// 	} else {
// 		return -1;
// 	}
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(rates);

// Functions that return functions
// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			console.log(name + ', can you please explain what UX design is?');
// 		} 
// 	}else if (job === 'teacher'){
// 			return function(name){
// 				console.log(name + ', what subject do you teach');
// 			}
// 		}else {
// 			return function(name){
// 			console.log('Hello,' + name + '. What do you do?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// IIFE
function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);