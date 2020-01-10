// DOM - Document Object Model
// const notes = [{
// 	title: 'My next move',
// 	body: 'Secure this bag for real'
// }, {
// 	title: 'Habits to work on',
// 	body: 'Stop napping so much'
// }, {
// 	title: 'Life modifications',
// 	body: 'Do more work'

// }];
const notes = getSavedNotes();

const filters = {
	searchText: ''
}

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


const renderNotes = function(notes, filters){
	const filteredNotes = notes.filter(function(note){
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	})

	// Clear element
	document.querySelector('#notes').innerHTML = '';

	filteredNotes.forEach(function(note) {
		const noteElement = document.createElement('p');
		//Show title if none exists
		if (note.title.length > 0) {
			noteElement.textContent = note.title;
		}else {
			noteElement.textContent = 'Unnamed note';
		}
		// noteElement.textContent = note.title;
		document.querySelector('#notes').appendChild(noteElement);
	})
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
	//e.target.textContent = 'The button was clicked';
	notes.push({
		title: '',
		body: ''
	});
	// Save new array to local storage
	localStorage.setItem('notes', JSON.stringify(notes));
	renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function(e){
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener('change', function(e) {
	console.log(e.target.checked)
});