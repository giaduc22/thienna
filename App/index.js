import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';
import Route from './Route';

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Route />
            </Provider>
        );
    }
}