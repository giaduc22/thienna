/* 
    Third Introduce
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { INTRODUCE_HEADER_WIDTH } from '../../Themes/Metrics';

const CHECK_ICON = require('../../Assets/Icons/check.png');

class CheckCircle extends Component {
    render() {
        return(
            <View style={styles.checkWrapper}>
                <View style={styles.checkCircle}>
                    <Image 
                        source={CHECK_ICON}
                        style={styles.checkIcon}
                    />
                </View>
            </View>
        );
    }
}

export default class SixthIntroduce extends Component {
    render() {
        return(
            <View style={styles.swipeContainer}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Trình tự kỹ thuật</Text>
                    {getImage('third_introduce', INTRODUCE_HEADER_WIDTH - 60, true)}
                </View>
                <View style={styles.orderWrapper}>
                    <View style={styles.orderRow}>
                        <CheckCircle />
                        <Text style={styles.orderText}>Điều thân đúng tư thế</Text>
                    </View>
                    <View style={styles.linkLine} />
                    <View style={styles.orderRow}>
                        <CheckCircle />
                        <Text style={styles.orderText}>Điều hơi thở</Text>
                    </View>
                    <View style={styles.linkLine} />
                    <View style={styles.orderRow}>
                        <CheckCircle />
                        <Text style={styles.orderText}>Điều tâm</Text>
                    </View>
                </View>
            </View>
        );
    }
}