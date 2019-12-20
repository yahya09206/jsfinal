// Expense manager
let myAccount = {
	name: 'Mike Jones',
	expenses: 0,
	income: 0
};

// Function to track expenses
let addExpense = function (account, amount){
	account.expenses +=  amount;
}

let addIncome = function(account, amount) {
	account.income += amount;
}

let resetAccount = function(account) {
	account.income = 0;
	account.expenses = 0;
}

let accountSum = function(account) {
	return `Account for ${account.name} has ${account.income-account.expenses}. ${account.income} in income. ${account.expenses} in expenses`;
}

addIncome(myAccount, 700);
addExpense(myAccount, 350);
addExpense(myAccount, 85);
console.log(accountSum(myAccount));
console.log(myAccount);