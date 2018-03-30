import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setEditingTodo, toogleTodo } from '../actions';

import TodoListItem from './TodoListItem';

@connect(state => ({ todos: state.todoList }), { setEditingTodo, toogleTodo })
export default class TodoList extends React.Component {
	saveTodo = () => {
		this.props.addTodo(this.state.value);
	};

	render() {
		return (
			<View style={styles.formContainer}>
				<FlatList
					data={this.props.todos}
					renderItem={({ item, index }) => (
						<TodoListItem
							todo={item}
							onClickRow={id => this.props.toogleTodo(id)}
							onLongPress={todo =>
								this.props.setEditingTodo(todo)
							}
						/>
					)}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formContainer: {
		flexDirection: 'row',
		flex: 1,
	},
	input: {
		flex: 4,
	},
	button: {
		flex: 1,
	},
});
