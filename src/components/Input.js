import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from 'TextInput';

const Input = ({ onChangeText, value }) => (
	<View style={styles.container}>
		<TextInput onChangeText={onChangeText} value={value} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
});

export default Input;
