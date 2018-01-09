import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MEDIA_ITEM_STYLES as styles } from './styles';
import { getImage } from '../../../Themes/Images';


export default class MediaItem extends Component {
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
                    </View>
                    {getImage('ic_download', 20, false, '#e66562')}
                </View>
            </TouchableOpacity>
        );  
    }
}