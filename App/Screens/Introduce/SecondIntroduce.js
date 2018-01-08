/* 
    Second Introduce
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { INTRODUCE_HEADER_WIDTH } from '../../Themes/Metrics';
import { SECOND_INTRODUCE } from '../../Constants/String';

class Item extends Component {
    render() {
        return(
            <View style={styles.itemWrapper}>
                <View style={styles.item}>
                    <Text style={styles.itemLabel}>
                        {this.props.label}
                    </Text>
                </View>
            </View>
        );
    }
}

export default class SecondIntroduce extends Component {
    render() {
        return(
            <View style={styles.swipeContainer}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Trước khi bắt đầu</Text>
                    {getImage('second_introduce', INTRODUCE_HEADER_WIDTH - 60, true)}
                </View>
                <View style={styles.introduceTextWrapper}>
                    <Text style={styles.introduceText}>{SECOND_INTRODUCE}</Text>
                    <View style={styles.itemRow}>
                        <Item label="ĐẠO ĐỨC" />
                        <Item label="CÔNG ĐỨC" />
                        <Item label="KHÍ CÔNG" />
                    </View>
                </View>
            </View>
        );
    }
}