/* 
    Login Screen
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { connect } from 'react-redux';
import { setMainNavigation } from '../../Actions/Navigation';

const LOGO = require('../../Assets/Images/logo.png');

class Login extends Component {

    componentDidMount() {
        this.props.setMainNavigation(this.props.navigation);
    }

    render() {
        return(
            <LinearGradient 
                style={styles.container}
                colors={['#fa709a', '#fca96d', '#fee041']}
            >
                <View style={styles.logoWrapper}>
                    {getImage('logo', 100, false)}
                    <Text style={styles.appName}>THIỀN ĐỊNH</Text>
                </View>
                <View style={styles.loginWrapper}>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.facebookLogin}>Đăng nhập qua Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                    >
                        <Text style={styles.googleLogin}>Đăng nhập qua Google</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { setMainNavigation })(Login);