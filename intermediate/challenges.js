//Challenge 1
function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = .2;
	}else if(bill >= 50 && bill < 200){
		percentage = .15;
	}else{
		percentage = .1
	}
	return percentage * bill;
}
tipCalculator(100);
console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];
var finalValue = [bills[0] + tips[0],
				  bills[1] + tips[1],
				  bills[2] + tips[2]];
console.log(tips, finalValue);

//BMI calculator
var john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
		return this.bmi;
	}
}

var mark = {
	fullName: 'Mark Smith',
	mass: 80,
	height: 1.6,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
		return this.bmi;
	}
}
john.calcBMI();
mark.calcBMI();
console.log(john, mark);

switch(true){
	case john.bmi > mark.bmi:
		console.log('John has a higher bmi');
		break;
	case john.bmi < mark.bmi:
		console.log('Mark has a higher bmi');
		break;
	default:
		console.log('Their BMIs are the same');
		break;
}