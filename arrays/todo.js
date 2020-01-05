// Array challenges
const todos = ["Get a job", "Get ready for nikkah", "Practice for interview", "Get big", "Find a wifey"];
todos.splice(2,1);
todos.push('my new note');
todos.shift();


console.log(`You have ${todos.length} todos`);
// console.log(todos[0], ' ', todos[todos.length - 2]);
//Print list
todos.forEach(function(item, index) {
	console.log(`${index + 1}. ${item}`);
});

for(let count = 0; count < todos.length; count++) {
	console.log(`${count + 1}. ${todos[count]}`);
}