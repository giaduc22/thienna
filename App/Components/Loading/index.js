/* 
    Loading Component
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class Loading extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.loadingWrapper}>
                    <ActivityIndicator 
                        color='#ffffff'
                        animating={true}
                    />
                </View>
            </View>
        );
    }
}