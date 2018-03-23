import { ADD_TODO, EDIT_TODO } from '../actions';
// import uuid from 'uuid/v4';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			console.log('reducer!')
			return [
				...state,
				{
					// id: uuid(),
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
		default:
			return state;
	}
};
