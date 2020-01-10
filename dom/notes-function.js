// Read existing notes from local storage
const getSavedNotes = function(){
	const notesJSON = localStorage.getItem('notes');

	if (notesJSON !== null) {
		return JSON.parse(notesJSON);
	}else {
		// if there is no data return empty array
		return [];
	}
};

// Save the notes to localStorage
const saveNotes = function(notes) {
	// Save new array to local storage
	localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate the DOM structure for a note
const generateNoteDom = function (note) {
	const noteElement = document.createElement('p');
	//Show title if none exists
	if (note.title.length > 0) {
		noteElement.textContent = note.title;
	}else {
		noteElement.textContent = 'Unnamed note';
	}
	// Return new note
	return noteElement;
};

// Render Application Notes
const renderNotes = function(notes, filters){
	const filteredNotes = notes.filter(function(note){
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	})

	// Clear element
	document.querySelector('#notes').innerHTML = '';

	filteredNotes.forEach(function(note) {
		const noteElement = generateNoteDom(note);
		document.querySelector('#notes').appendChild(noteElement);
	})
};
