/* 
    Help Screen
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { HELP_INTRO } from '../../../Constants/String';
import { connect } from 'react-redux';

const FIRST_STOCK = require('../../../Assets/Images/thien-it-tg.jpg');
const SECOND_STOCK = require('../../../Assets/Images/thien-can-ban.jpg');

class Help extends Component {

    _goNewbie() {
        this.props.mainNavigation.navigate('NewbieHelp');
    }

    _goPractician() {
        this.props.mainNavigation.navigate('PracticianHelp');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image 
                        source={FIRST_STOCK}
                        style={styles.image}
                    />
                    <View style={styles.introduceWrapper}>
                        <Text style={styles.introduceHeader}>Hướng dẫn thiền</Text>
                        <Text style={styles.introduce}>{'DÀNH CHO\nNGƯỜI CÓ ÍT THỜI GIAN'}</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text 
                            style={styles.helpIntroText}
                            numberOfLines={2}
                            adjustsFontSizeToFit
                        >
                            {HELP_INTRO}
                        </Text>
                        <TouchableOpacity
                            style={styles.startButtonWrapper}
                            onPress={() => this._goNewbie()}
                        >
                            <View style={styles.startButton}>
                                <Text style={styles.startLabel}>BẮT ĐẦU NGAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image 
                        source={SECOND_STOCK}
                        style={styles.image}
                    />
                    <View style={styles.introduceWrapper}>
                        <Text style={styles.introduceHeader}>Trình tự căn bản</Text>
                        <Text style={styles.introduce}>{'DÀNH CHO NGƯỜI CÓ\nNHIỀU THỜI GIAN TU TẬP'}</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text 
                            style={styles.helpIntroText}
                            numberOfLines={2}
                            adjustsFontSizeToFit
                        >
                            {HELP_INTRO}
                        </Text>
                        <TouchableOpacity
                            style={styles.startButtonWrapper}
                            onPress={() => this._goPractician()}
                        >
                            <View style={styles.startButton}>
                                <Text style={styles.startLabel}>BẮT ĐẦU NGAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        mainNavigation: state.navigation.mainNavigation
    }
}

export default connect(mapStateToProps)(Help);
