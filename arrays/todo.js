// Array challenges
// const todos = ["Get a job", "Get ready for nikkah", "Practice for interview", "Get big", "Find a wifey"];

const todos = [{
	title: 'Goal for 2020',
	body: 'Get a job',
	completed: false
}, {
	title: 'Goal for January',
	body: 'Get ready for nikkah',
	completed: false
}, {
	title: 'Task for next couple of months',
	body: 'Practice for interview',
	completed: false
}, {
	title: 'Gym Goals',
	body: 'Get big',
	completed: true
}, {
	title: 'Longterm goal',
	body: 'Find a wifey',
	completed: false
}];

const orderCompleted = function(todos){
	todos.sort(function(a, b) {
		if (a.completed < b.completed) {
			return -1;
		}else if (b.completed < a.completed) {
			return 1;
		}else {
			return 0;
		}
	});
};

orderCompleted(todos);
console.log(todos);

// Challenge for returning list of things to be yet completed
const getThingsDone = function(todos){
		return todos.filter(function (todo, index) {
			return !todo.completed;
	});
}

// console.log(getThingsDone(todos));

const deleteTodo = function(todos, todoText) {
	const index = todos.findIndex(function(todo) {
		return todo.title.toLowerCase() === todoText.toLowerCase();
	})
	if (index > -1) {
		// Delete item from array
		todos.splice(index, 1);
	}
};

// deleteTodo(todos, '!!goal for january');
// console.log(todos);


// todos.splice(2,1);
// todos.push('my new note');
// todos.shift();


// console.log(`You have ${todos.length} todos`);
// // console.log(todos[0], ' ', todos[todos.length - 2]);
// //Print list
// todos.forEach(function(item, index) {
// 	console.log(`${index + 1}. ${item}`);
// });

// for(let count = 0; count < todos.length; count++) {
// 	console.log(`${count + 1}. ${todos[count]}`);
// }