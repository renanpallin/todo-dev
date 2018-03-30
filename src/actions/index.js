export const ADD_TODO = 'ADD_TODO';
// export const addTodo = text => ({
// 	type: ADD_TODO,
// 	text,
// });

export const addTodo = text => {
	// console.log('add todo sendo chamado', text);
	return {
		type: ADD_TODO,
		text,
	};
};

export const TOOGLE_TODO = 'TOOGLE_TODO';
export const toogleTodo = todoId => ({
	type: TOOGLE_TODO,
	todoId,
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = todo => ({
	type: SET_EDITING_TODO,
	todo,
});

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = todo => ({
	type: UPDATE_TODO,
	todo,
});

export const SET_TODO = 'SET_TODO';
export const setTodo = todo => ({
	type: SET_TODO,
	todo,
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = text => ({
	type: SET_TODO_TEXT,
	text,
});
