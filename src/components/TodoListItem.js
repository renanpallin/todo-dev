import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onClickRow }) => {
	const { id, text, done } = todo;
	return (
		<TouchableOpacity onPress={() => onClickRow(id)}>
			<View style={styles.line}>
				<Text style={styles.lineText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',

		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7,
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,

		marginLeft: 15,
		borderRadius: 50,
	},
});

export default TodoListItem;
