import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, updateTodo } from '../actions';
import Input from './Input';

@connect(({ todo }) => ({ todo }), { addTodo, updateTodo })
export default class TodoForm extends React.Component {
	state = {
		text: this.props.todo.text || '',
	};

	componentWillReceiveProps(nextProps) {
		console.log('cwr', nextProps);
		if (nextProps.todo === this.props.todo)
			return;
		this.setState({
			text: nextProps.todo.text || ''
		})

	}


	onChangeText = text => this.setState({ text });
	saveTodo = () => {
		const { todo } = this.props;
		if (todo.id) this.props.updateTodo(todo);
		else this.props.addTodo(this.state.text);
		this.setState({ text: '' })
	};

	render() {
		const { text } = this.state;
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
