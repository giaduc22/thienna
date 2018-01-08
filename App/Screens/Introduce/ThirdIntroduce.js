/* 
    Third Introduce
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { INTRODUCE_HEADER_WIDTH } from '../../Themes/Metrics';
import { DAO_DUC_INTRODUCE } from '../../Constants/String';

export default class ThirdIntroduce extends Component {
    render() {
        return(
            <View style={styles.swipeContainer}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Đạo Đức</Text>
                    {getImage('second_introduce', INTRODUCE_HEADER_WIDTH - 60, true)}
                </View>
                <View style={styles.introduceTextWrapper}>
                    <ScrollView>
                        <Text style={styles.introduceText}>{DAO_DUC_INTRODUCE}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}