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

	saveTodo = () => {
		this.props.addTodo(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		return (
			<View style={styles.formContainer}>
				<View style={styles.input}>
					<Input
						onChangeText={this.onChangeText}
						value={this.state.value}
					/>
				</View>
				<View style={styles.button}>
					<Button
						onPress={this.saveTodo}
						title="Salvar"
					/>
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
		height: 60
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
