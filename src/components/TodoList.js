import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import TodoListItem from './TodoListItem';

@connect(state => ({ todos: state }))
export default class TodoList extends React.Component {
	saveTodo = () => {
		this.props.addTodo(this.state.value);
		this.setState({ valule: '' });
	};

	render() {
		return (
			<View style={styles.formContainer}>
				<FlatList
					data={this.props.todos}
					renderItem={({ item, index }) => (
						<TodoListItem todo={item} onClickRow={id => console.log(id)} />
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
		flex: 1
	},
	input: {
		flex: 4,
	},
	button: {
		flex: 1,
	},
});
