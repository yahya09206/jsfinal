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