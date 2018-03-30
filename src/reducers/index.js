import { ADD_TODO, EDIT_TODO } from '../actions';
import uuid from 'uuid/v4';
import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import todoReducer from './todoReducer';

export default combineReducers({
	todoList: todoListReducer,
	todo: todoReducer,
});
