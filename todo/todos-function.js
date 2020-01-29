// Fetch existing todos from localStorage
const getSavedTodos = function(){
	const todosJSON = localStorage.getItem('todos');

	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	}else {
		return [];
	}
};
