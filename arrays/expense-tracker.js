const account = {
	name: 'Charlie Brown',
	expenses: [],
	income: [],
	addExpense: function(description, amount){
		this.expenses.push({
			description: description,
			amount: amount
		})
	},
	addIncome: function(description, amount){
		this.income.push({
			description: description,
			amount: amount
		})
	},
	getAccountSummary: function(){
		let totalExpenses = 0;
		let totalIncome = 0;
		let accountBalance = 0;

		this.income.forEach(function(income){
			totalIncome += income.amount;
		});
		
		this.expenses.forEach(function(expense){
			totalExpenses += expense.amount;
		});

		accountBalance = totalIncome - totalExpenses;
		return `${this.name} has a balance of $${accountBalance} $${totalExpenses} in expenses and $${totalIncome} in income`;
	}
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());