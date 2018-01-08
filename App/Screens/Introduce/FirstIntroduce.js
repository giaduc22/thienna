/* 
    First Introduce
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { INTRODUCE_HEADER_WIDTH } from '../../Themes/Metrics';
import { FIRST_INTRODUCE } from '../../Constants/String';

export default class FirstIntroduce extends Component {
    render() {
        return(
            <View style={styles.swipeContainer}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Chào mừng bạn !</Text>
                    {getImage('first_introduce', INTRODUCE_HEADER_WIDTH - 60, true)}
                </View>
                <View style={styles.introduceTextWrapper}>
                    <Text style={styles.introduceText}>{FIRST_INTRODUCE}</Text>
                </View>
            </View>
        );
    }
}