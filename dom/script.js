// DOM - Document Object Model
const notes = getSavedNotes();

const filters = {
	searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
	//e.target.textContent = 'The button was clicked';
	notes.push({
		title: '',
		body: ''
	})
	saveNotes(notes);
	renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function(e){
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener('change', function(e) {
	console.log(e.target.value)
});


// CRUD for local storage
// localStorage.setItem('Location', 'Seattle');

// Read getItem
// console.log(localStorage.getItem('Location'));

// Delete previously saved data
// localStorage.removeItem('Location');

// Delete all data
// localStorage.clear();

// Save array of objects
// const user = {
// 	name: 'Charlie',
// 	age: 29
// }

// const userJson = JSON.stringify(user);
// console.log(userJson);
// localStorage.setItem('user', userJson);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);