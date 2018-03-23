import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import Input from './Input';

@connect(null, { addTodo })
export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};
	}

	onChangeText = text =>
		this.setState({
			value: text,
		});

	saveTodo = () => this.props.addTodo(this.state.value);

	render() {
		return (
			<View style={styles.formContainer}>
				<Input
					onChangeText={this.onChangeText}
					value={this.state.value}
				/>
				<Button
					onPress={this.saveTodo}
					title="Salvar"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formContainer: {},
});
