/* 
    Notification Screen
    Created by Dudv on 06/01/2018
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChildNavBar from '../../../../Components/ChildNavBar';
import styles from './styles';
import HTML from 'react-native-render-html';

class Notification extends Component {
    _getContent(content) {
        content = content.replace(/<p>/g, '');
        content = content.replace(/<p>/g, '');
        return content;
    }

    render() {
        const { content } = this.props.navigation.state.params.item;
        return (
            <View style={{ flex: 1 }}>
                <ChildNavBar label="Khí công" onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <Text style={styles.notification}>{this._getContent(content)}</Text>
                </View>
            </View>
        );
    }
}

export default Notification;
