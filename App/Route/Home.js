import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from '../Screens/Home';
import Menu from '../Screens/Menu';

import { DEVICE_WIDTH } from '../Themes/Metrics';

export default DrawerNavigator({
    Home: { screen: Home }
},
    {
        drawerWidth: DEVICE_WIDTH,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props}/>,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

