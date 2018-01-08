/* 
    Custom TabBar 
    Created by Dudv on 30/12/2017
*/

'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StatusBar, Image } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { TAB_ACTIVE_COLOR, TAB_INACTIVE_COLOR } from '../../Themes/Colors';

class Tab extends Component {
    render() {
        const { icon, tintColor, label, onPress } = this.props;
        return(
            <TouchableOpacity onPress={onPress} style={styles.tab}>
                <Image 
                    source={icon}
                    style={[styles.icon, { tintColor }]}
                />
                <Text style={[styles.labelText, { color: tintColor }]}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default class CustomTabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.selectedTabIcons = [];
        this.unselectedTabIcons = [];
        this.icons = [
            require('../../Assets/Icons/ic-thien-dinh.png'),
            require('../../Assets/Icons/ic-huong-dan.png'),
            require('../../Assets/Icons/ic-thu-vien.png'),
            require('../../Assets/Icons/ic-cauhoi.png'),
        ];

        this.labels = [
            'Thiền định',
            'Hướng dẫn',
            'Thư viện',
            'Câu hỏi'
        ]
    }

    renderTab() {
        const { activeTab } = this.props;
        return(
            <View style={styles.tabs}>
                <Tab 
                    icon = {this.icons[0]}
                    label = {this.labels[0]}
                    tintColor = {activeTab === 0 ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR}
                    onPress={() => this.props.goToPage(0)}
                />
                <Tab 
                    icon = {this.icons[1]}
                    label = {this.labels[1]}
                    tintColor = {activeTab === 1 ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR}
                    onPress={() => this.props.goToPage(1)}
                />
                <Tab 
                    icon = {this.icons[2]}
                    label = {this.labels[2]}
                    tintColor = {activeTab === 2 ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR}
                    onPress={() => this.props.goToPage(2)}
                />
                <Tab 
                    icon = {this.icons[3]}
                    label = {this.labels[3]}
                    tintColor = {activeTab === 3 ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR}
                    onPress={() => this.props.goToPage(3)}
                />
            </View>
        );
    }

    render() {
        var containerWidth = this.props.containerWidth;
        var numberOfTabs = this.props.tabs.length;

        var left = {
            transform: [
                {
                    translateX: this.props.scrollValue.interpolate({
                        inputRange: [0, 1,], 
                        outputRange: [0, containerWidth / numberOfTabs,],
                    })
                }
            ]
        }

        return (
            <View>
                <StatusBar translucent backgroundColor='transparent' />
                <View style={styles.separator}/>
                {this.renderTab()}
                <Animated.View style={[left]} />
            </View>
        );
    }
}

CustomTabBar.protoTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array
}

