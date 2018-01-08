/* 
    Fifth Introduce
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { INTRODUCE_HEADER_WIDTH } from '../../Themes/Metrics';
import { KHI_CONG_INTRODUCE } from '../../Constants/String';

export default class FifthIntroduce extends Component {
    render() {
        return(
            <View style={styles.swipeContainer}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Khí công</Text>
                    {getImage('second_introduce', INTRODUCE_HEADER_WIDTH - 60, true)}
                </View>
                <View style={styles.introduceTextWrapper}>
                    <ScrollView style={{ flex: 1 }}>
                        <Text style={styles.introduceText}>{KHI_CONG_INTRODUCE}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}