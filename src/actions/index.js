export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
	type: ADD_TODO,
	text,
});

export const TOOGLE_TODO = 'TOOGLE_TODO';
export const toogleTodo = todoId => ({
	type: TOOGLE_TODO,
	todoId,
});

export const EDIT_TODO = 'EDIT_TODO';
export const editTodo = todo => ({
	type: EDIT_TODO,
	todo,
});
