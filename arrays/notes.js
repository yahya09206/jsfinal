const notes = ["Note 1", "Note 2", "Note 3"];

// Add item to end of notes array
notes.push('my new note');
// Remove item from end of notes array
notes.pop();
// Remove first item from array
console.log(notes.shift());
// Add item to front of list
console.log(notes.unshift('My first note'));
// Add element to middle of array or remove from anywhere
notes.splice(1, 0, 'This is the new 2nd item');
notes.splice(1, 1, 'This is the new 2nd item');

// 

// Print out length and specific item
console.log(notes.length);
console.log(notes);

// Array challenges
const todos = ["Get a job", "Get ready for nikkah", "Practice for interview", "Get big", "Find a wifey"];
todos.splice(2,1);
todos.push('my new note');
todos.shift();

console.log(todos);
console.log(`You have ${todos.length} todos`);
console.log(todos[0], ' ', todos[todos.length - 2]);