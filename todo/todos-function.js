// Fetch existing todos from localStorage
const getSavedTodos = function(){
	const todosJSON = localStorage.getItem('todos');

	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	}else {
		return [];
	}
};

// Save Todos
const saveTodos = function(todos){
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Render Todos
const renderTodos = function(todos, filters){
	const filteredTodos = todos.filter(function(todo){
		const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
		return searchTextMatch && hideCompletedMatch;
	});

	//Check how many todos are not completed
	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed;
	});

	document.querySelector('#todos').innerHTML = '';

	document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

	filteredTodos.forEach(function (todo) {
		document.querySelector('#todos').appendChild(generateTodoDOM(todo));
	});	
};

// Remove a todo from the list by targeting ID
const removeTodo = function(id) {
	const todoIndex = todos.findIndex(function(todo) {
		return todo.id === id;
	})
	// Remove todo
	if(todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
};

// Toggle completed value for a given todo
const toggleTodo = function(id){
	const todo = todos.find(function(todo) {
		return todo.id === id;
	})
	if (todo !== undefined) {
		todo.completed = !todo.completed;
	}
};

// Generate TODO DOM
const generateTodoDOM = function(todo) {
	const divEl = document.createElement('div');
	const checkbox = document.createElement('input');
	const textEl = document.createElement('span');
	const removeButton = document.createElement('button');

	// Setup todo checkbox
	checkbox.setAttribute('type', 'checkbox');
	checkbox.checked = todo.completed;
	divEl.appendChild(checkbox);
	checkbox.addEventListener('change', function() {
		toggleTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});

	// Setup todo text
	textEl.textContent = todo.title;
	divEl.appendChild(textEl);

	// Setup remove button
	removeButton.textContent = 'x';
	divEl.appendChild(removeButton);
	removeButton.addEventListener('click', function() {
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});

	return divEl;
}

// Generate Summary Dom
const generateSummaryDOM = function(incompleteTodos) {
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	return summary;

}