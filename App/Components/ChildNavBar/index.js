import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';

class NavBar extends Component {
    render() {
        const { onBack, label } = this.props;
        return(
            <View style={styles.container}>
                <View style={{ height: 25, backgroundColor: 'rgba(0, 0, 0, 0.2)'}} />
                <View style={styles.navBar}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.button}
                        onPress={onBack}
                    >
                        {getImage('ic_arrow', 20, true, '#e66562')}
                    </TouchableOpacity>
                    <Text 
                        style={styles.label}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        {label}
                    </Text>
                    <View
                        style={styles.button}
                    >
                    </View>
                </View>
            </View>
        );
    }
}

export default NavBar;