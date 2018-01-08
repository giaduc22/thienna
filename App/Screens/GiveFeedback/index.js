/* 
    GiveFeedback Screen
    Created by Dudv on 06/01/2018
*/

import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import ChildNavBar from '../../Components/ChildNavBar';
import styles from './styles';

class Input extends Component {
    render() {
        return(
            <View style={styles.inputWrapper}>
                <TextInput 
                    {...this.props}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#9d9eab'
                />
            </View>
        );
    }
}

class LargeInput extends Component {
    render() {
        return(
            <View style={styles.largeinputWrapper}>
                <TextInput 
                    {...this.props}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#9d9eab'
                />
            </View>
        );
    }
}

class GiveFeedback extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
                <ChildNavBar label="Đóng góp ý kiến" onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <View style={{ flex: 1 }} />
                    <Input 
                        placeholder='Họ tên của bạn'
                    />
                    <Input 
                        placeholder='Nhập email'
                    />
                    <Input 
                        placeholder='Số điện thoại'
                    />
                    <LargeInput 
                        placeholder='Ý kiến đóng góp'
                        multiline
                    />
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.label}>ĐÓNG GÓP Ý KIẾN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default GiveFeedback;
