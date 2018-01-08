import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const { openMenu, onNotification, navBarLabel } = this.props;
        return(
            <View style={styles.container}>
                <View style={{ height: 25, backgroundColor: 'rgba(0, 0, 0, 0.2)'}} />
                <View style={styles.navBar}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.button}
                        onPress={openMenu}
                    >
                        {getImage('ic_menu', 24, true, '#e66562')}
                    </TouchableOpacity>
                    <Text style={styles.label}>{navBarLabel}</Text>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.button}
                        onPress={onNotification}
                    >
                        {getImage('ic_chat', 24, true, '#9d9eab')}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        navBarLabel: state.navBar.navBarLabel,
    }
}

export default connect(mapStateToProps)(NavBar);