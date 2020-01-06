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

//Check how many todos are not completed
const incompleteTodos = todos.filter(function(todo) {
	return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
	const p = document.createElement('p');
	p.textContent = todo.title;
	document.querySelector('body').appendChild(p);
});











