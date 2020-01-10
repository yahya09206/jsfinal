// Read existing notes from local storage
const getSavedNotes = function(){
	const notesJSON = localStorage.getItem('notes');

	if (notesJSON !== null) {
		return JSON.parse(notesJSON);
	}else {
		// if there is no data return empty array
		return [];
	}
}