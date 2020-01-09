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

// let todos = [];

const filters = {
	searchText: '',
	hideCompleted: false
}

const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
	todos = JSON.parse(todosJSON);
}

const renderTodos = function(todos, filters){
	let filteredTodos = todos.filter(function(todo){
		return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	filteredTodos = filteredTodos.filter(function(todo) {
		return !filters.hideCompleted || !todo.completed;
		// if (filters.hideCompleted) {
		// 	return !todo.completed;
		// }else{
		// 	return true;
		// }
	});

	//Check how many todos are not completed
	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed;
	});

	document.querySelector('#todos').innerHTML = '';

	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	document.querySelector('#todos').appendChild(summary);

	filteredTodos.forEach(function (todo) {
		const p = document.createElement('p');
		if (todo.title.length > 0) {
			p.textContent = todo.title;
		}else {
			p.textContent = 'Unnamed todo';
		}
		// p.textContent = todo.title;
		document.querySelector('#todos').appendChild(p);
	})
	
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e){
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});


document.querySelector('#todo-form').addEventListener('submit', function(e) {
	e.preventDefault();
	todos.push({
		title: e.target.elements.addTodo.value,
		completed: false
	})
	renderTodos(todos, filters);
	e.target.elements.addTodo.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e){
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});










