let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

let otherBook = {
	title: 'A peoples History',
	author: 'Howard Zinn',
	pageCount: 723
};

// Function to get summary
let getSummary = function (book){
	// Return object
	return {
		summary: `${book.title}, by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount} pages long`
	}
}
let bookSummary = getSummary(myBook);
let OtherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Conversion formulas
// Celsius = (fahrenheit - 32) * 5 / 9
// Kelvin = (fahrenheit + 459.67) * 5 / 9

let getConversion = function(fahrenheit) {
	return {
		fahrenheit: fahrenheit,
		kelvin: (fahrenheit + 459.67) * 5 / 9,
		celsius: (fahrenheit - 32) * 5 / 9
	}
}
let temps = getConversion(78);
console.log(temps);