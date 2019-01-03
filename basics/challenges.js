// Challenge 1
var markHeight = 6.7;
var johnHeight = 5.4;
var johnBMI = 125 / (johnHeight * johnHeight);
var markBMI = 135 / (markHeight * markHeight);

var result = johnBMI < markBMI;
console.log(result);

// Challenge 2
var teamMike = (89+120+103)/3;
var teamJohn = (116+94+123)/3;
var teamMary = (97+134+105)/3;

switch(true){
	case teamMike > teamJohn && teamMike > teamMary :
		console.log('Mike is the winner with ' + teamMike + ' average points');
		break;
	case teamJohn > teamMike && teamJohn > teamMary :
		console.log('John is the winner with ' + teamJohn + ' average points');
		break;
	case teamMary > teamJohn && teamMary > teamMike :
		console.log('Mary is the winner with ' + teamMary + ' average points');
		break;
	default:
		console.log('TIE!!!!');

}

