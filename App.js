import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import TodoForm from './src/components/TodoForm';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    {/*<TodoList />*/}
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
