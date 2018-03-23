import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';

import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'remote-redux-devtools';

import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducer, devToolsEnhancer());
// const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <View style={styles.todoForm}>
                        <TodoForm />
                    </View>
                    <View style={styles.todoList}>
                        <TodoList />
                    </View>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    todoForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoList: {
        flex: 6,
    },
});
