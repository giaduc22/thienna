/* 
    Author Introduce Screen
    Created by Dudv on 06/01/2018
*/

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChildNavBar from '../../Components/ChildNavBar';
import styles from './styles';
import AUTHOR_INTRODUCE from '../../Constants/Author';

class AuthorIntroduce extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChildNavBar label="Giới thiệu tác giả" onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.text}>{AUTHOR_INTRODUCE}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default AuthorIntroduce;
