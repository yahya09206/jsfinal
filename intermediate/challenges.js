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