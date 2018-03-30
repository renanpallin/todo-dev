import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onClickRow, onLongPress }) => {
	const { id, text, done } = todo;
	return (
		<TouchableOpacity
			onPress={() => onClickRow(id)}
			onLongPress={() => onLongPress(todo)}>
			<View style={styles.line}>
				<Text
					style={[styles.lineText, done ? styles.lineThrough : null]}>
					{text}
				</Text>
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
	lineThrough: {
		textDecorationLine: 'line-through',
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,

		marginLeft: 15,
		borderRadius: 50,
	},
});

export default TodoListItem;
