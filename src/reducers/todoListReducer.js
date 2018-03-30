import { ADD_TODO, EDIT_TODO, UPDATE_TODO, TOOGLE_TODO } from '../actions';
// import uuid from 'uuid/v4';
import { combineReduers } from 'redux';

let nextTodoId = 1;
export default (state = [{ id: 123, text: 'First', done: false }], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: nextTodoId++,
					text: action.text,
					done: false,
				},
			];
		case EDIT_TODO:
			return state.map(todo => {
				if (todo.id !== action.todo.id) return todo;
				return {
					...todo,
					...action.todo,
				};
			});
		case UPDATE_TODO:
			return state.map(
				todo => (todo.id === action.todo.id ? action.todo : todo)
			);
		case TOOGLE_TODO:
			return state.map(
				todo =>
					todo.id === action.todoId
						? { ...todo, done: !todo.done }
						: todo
			);
		default:
			return state;
	}
};
