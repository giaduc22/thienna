/* 
    Library Item
    Created by Dudv on 03/01/2018
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ITEM_STYLES as styles } from './styles';
import { getImage } from '../../../Themes/Images';



export default class Item extends Component {
    render() {
        const { image, title, subTitle } = this.props;
        return(
            <TouchableOpacity {...this.props} activeOpacity={0.8} style={styles.item}>
                <Image 
                    source={image}
                    style={styles.icon}
                />
                <View style={styles.rightContentWrapper}>
                    <View style={styles.contentWrapper}>
                        <Text style={styles.title}>{title}</Text>
                        <Text 
                            style={styles.subTitle}
                            adjustsFontSizeToFit
                            numberOfLines={1}
                        >
                            {subTitle}
                        </Text>
                    </View>
                    {getImage('ic_right_arrow', 20, false, '#dddde6')}
                </View>
            </TouchableOpacity>
        );  
    }
}