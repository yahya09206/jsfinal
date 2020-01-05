const notes = [{
	title: 'My next trip',
	body: 'I would like to go to spain'
}, {
	title: 'My goal for 2020',
	body: 'Get a job, get big'
}, {
	title: 'Life modifications',
	body: 'Stay hungry'
}];

const findNote = function(notes, noteTitle) {
	return notes.find(function (note, index) {
		return note.title.toLowerCase() === noteTitle.toLowerCase();
	})
};

// const findNote = function(notes, noteTitle) {
// 	const index = notes.findIndex(function (note, index) {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase();
// 	})
// 	return notes[index];
// };

const note = findNote(notes, 'my next trip');
console.log(note);

// // Add item to end of notes array
// notes.push('my new note');
// // Remove item from end of notes array
// notes.pop();
// // Remove first item from array
// console.log(notes.shift());
// // Add item to front of list
// console.log(notes.unshift('My first note'));
// // Add element to middle of array or remove from anywhere
// notes.splice(1, 0, 'This is the new 2nd item');
// notes.splice(1, 1, 'This is the new 2nd item');

// Loop through list
// notes.forEach(function (item, index) {
// 	console.log(index);
// 	console.log(item);
// });

// for (let count = 0; count < notes.length; count++) {
// 	console.log(notes[count]);
// }

// Print in reverse
// for (let count = notes.length; count >= 0; count--) {
// 	console.log(notes[count]);
// }


// Print out length and specific item
// console.log(notes.length);
// console.log(notes);
// // Find if note exists
// // console.log(notes.indexOf({}));

// const index = notes.findIndex(function(note, index) {
// 	console.log(note);
// 	return note.title === 'My next trip';
// });
// console.log(index);