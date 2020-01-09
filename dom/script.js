// DOM - Document Object Model
const notes = [{
	title: 'My next move',
	body: 'Secure this bag for real'
}, {
	title: 'Habits to work on',
	body: 'Stop napping so much'
}, {
	title: 'Life modifications',
	body: 'Do more work'

}];

const filters = {
	searchText: ''
}

// CRUD for local storage
// localStorage.setItem('Location', 'Seattle');

// Read getItem
console.log(localStorage.getItem('Location'));


const renderNotes = function(notes, filters){
	const filteredNotes = notes.filter(function(note){
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	})

	// Clear element
	document.querySelector('#notes').innerHTML = '';

	filteredNotes.forEach(function(note) {
		const noteElement = document.createElement('p');
		noteElement.textContent = note.title;
		document.querySelector('#notes').appendChild(noteElement);
	})
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
	e.target.textContent = 'The button was clicked';
});

document.querySelector('#search-text').addEventListener('input', function(e){
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener('change', function(e) {
	console.log(e.target.checked)
});