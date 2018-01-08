import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Root from './Root';

export default class Route extends Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' />
                <Root />
            </View>
        );
    }
}