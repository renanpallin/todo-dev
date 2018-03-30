import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, updateTodo, setTodoText } from '../actions';
import Input from './Input';

@connect(({ todo }) => ({ todo }), { addTodo, setTodoText, updateTodo })
export default class TodoForm extends React.Component {
	onChangeText = text => this.props.setTodoText(text);
	saveTodo = () => {
		const { todo } = this.props
		if (todo.id)
			return this.props.updateTodo(todo)
		return this.props.addTodo(todo.text);
	};

	render() {
		const { text } = this.props.todo;
		return (
			<View style={styles.formContainer}>
				<View style={styles.input}>
					<Input onChangeText={this.onChangeText} value={text} />
				</View>
				<View style={styles.button}>
					<Button onPress={this.saveTodo} title="Salvar" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formContainer: {
		flexDirection: 'row',
		flex: 1,
		// height: 60
	},
	input: {
		flex: 4,
		height: 60,
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
