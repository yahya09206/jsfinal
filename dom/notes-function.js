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

// Remove a note from the list
const removeNote = function (id) {
	const noteIndex = notes.findIndex(function(note) {
		return note.id === id;
	})
	// Remove note
	if (noteIndex > -1) {
		notes.splice(noteIndex, 1);
	}
}

// Generate the DOM structure for a note
const generateNoteDom = function (note) {
	const noteElement = document.createElement('div');
	const textElement = document.createElement('span');
	const button = document.createElement('button');

	// Setup remove note button
	button.textContent = 'x';
	noteElement.appendChild(button);
	button.addEventListener('click', function() {
		removeNote(note.id);
		saveNotes(notes);
		renderNotes(notes, filters);
	});

	// Show title if none exists
	if (note.title.length > 0) {
		textElement.textContent = note.title;
	}else {
		textElement.textContent = 'Unnamed note';
	}

	noteElement.appendChild(textElement);
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
