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

// Generate TODO DOM
const generateTodoDOM = function(todo) {
	const p = document.createElement('p');
	p.textContent = todo.title;
	return p;
}

// Generate Summary Dom
const generateSummaryDOM = function(incompleteTodos) {
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	return summary;

}