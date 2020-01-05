const notes = ["Note 1", "Note 2", "Note 3"];

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

notes[2] = 'This is now the new note 3';

// Loop through list
notes.forEach(function (item, index) {
	console.log(index);
	console.log(item);
});

for (let count = 0; count < notes.length; count++) {
	console.log(notes[count]);
}

// Print in reverse
for (let count = notes.length; count >= 0; count--) {
	console.log(notes[count]);
}


// Print out length and specific item
console.log(notes.length);
console.log(notes);