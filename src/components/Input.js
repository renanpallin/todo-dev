import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from 'TextInput';

const Input = ({ onChangeText, value }) => (
	<TextInput onChangeText={(text) => {
		onChangeText(text)
	}} value={value} style={styles.input} />
);

const styles = StyleSheet.create({
	input: {
		height: 60,
		paddingLeft: 15,
	},
});

export default Input;
