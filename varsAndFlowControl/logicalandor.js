let temp = 55;

if (temp >= 60 && temp <= 90) {
	console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120) {
	console.log('Do not go outside');
} else {
	console.log('Do what you want');
}

// Logical challenge
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
	console.log('Here are our vegan options');
} else if (isGuestTwoVegan || isGuestOneVegan ) {
	console.log('Here are all of our options including vegan');
} else {
	console.log('What are we having today?');
}