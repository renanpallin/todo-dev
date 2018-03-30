import { ADD_TODO, SET_EDITING_TODO, SET_TODO, SET_TODO_TEXT, UPDATE_TODO } from '../actions';
import uuid from 'uuid/v4';
import { combineReduers } from 'redux';

const INITIAL_STATE = {
	id: null,
	text: '',
	done: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_EDITING_TODO:
		case SET_TODO:
			return action.todo;
		case ADD_TODO:
		case UPDATE_TODO:
			return INITIAL_STATE;
		default:
			return state;
	}
};
