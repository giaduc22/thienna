import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Meditation from '../Screens/Meditation';
import Help from '../Screens/Help';
import Library from '../Screens/Library';
import Question from '../Screens/Question';
import styles from './styles';
import { TAB_ACTIVE_COLOR, TAB_INACTIVE_COLOR } from '../Themes/Colors';

const TabBar = TabNavigator({
    Meditation: { screen: Meditation },
    Help: { screen: Help },
    Library: { screen: Library },
    Question: { screen: Question }
},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            upperCaseLabel: false,
            inactiveTintColor: TAB_INACTIVE_COLOR,
            activeTintColor: TAB_ACTIVE_COLOR,
            style: styles.tabBar,
            indicatorStyle: styles.indicator,
            labelStyle: styles.label
        }
    }
);