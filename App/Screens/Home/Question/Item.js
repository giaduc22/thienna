/* 
    Question Item
    Created by Dudv on 03/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ITEM_STYLES as styles } from './styles';
import { getImage } from '../../../Themes/Images';

const ITEM_ICON = require('../../../Assets/Icons/ic-cau-hoi-detail.png');

export default class Item extends Component {

    _getQuestion(question) {
        return question.substring(5, question.length);
    }

    render() {
        const { title } = this.props;
        return(
            <TouchableOpacity {...this.props} activeOpacity={0.8} style={styles.item}>
                <Image 
                    source={ITEM_ICON}
                    style={styles.icon}
                />
                <View style={styles.rightContentWrapper}>
                    <Text 
                        style={styles.title}
                        adjustsFontSizeToFit
                        numberOfLines={1}
                    >
                        {this._getQuestion(title)}
                    </Text>
                    {getImage('ic_right_arrow', 20, false, '#dddde6')}
                </View>
            </TouchableOpacity>
        );  
    }
}