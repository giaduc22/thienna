/* 
    Notification Screen
    Created by Dudv on 06/01/2018
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChildNavBar from '../../Components/ChildNavBar';
import styles from './styles';

class Notification extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChildNavBar label="Thông báo" onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <Text style={styles.notification}>Không có thông báo nào !</Text>
                </View>
            </View>
        );
    }
}

export default Notification;
