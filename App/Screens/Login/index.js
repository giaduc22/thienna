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
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
// import { GoogleSignin } from 'react-native-google-signin';


const LOGO = require('../../Assets/Images/logo.png');

class Login extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            isAuthenticated: false,
            user: null,
        };
    }

    componentDidMount() {
        this.props.setMainNavigation(this.props.navigation);
        this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
            // console.log(`changed User : ${JSON.stringify(changedUser.toJSON())}`);
            this.setState({ user: changedUser });
        });
    }

    onLoginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebase.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                console.log(`Facebook Login with user : ${JSON.stringify(currentUser.toJSON())}`);
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }

    // onGoogleLogin = () => {
    //     // Add configuration settings here:
    //     GoogleSignin.configure()
    //         .then(() => {
    //             GoogleSignin.signIn()
    //                 .then((data) => {
    //                     // create a new firebase credential with the token
    //                     const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

    //                     // login with credential
    //                     return firebase.auth().signInWithCredential(credential)
    //                 })
    //                 .then((currentUser) => {
    //                     console.info(JSON.stringify(currentUser.toJSON()))
    //                 })
    //                 .catch((error) => {
    //                     console.error(`Login fail with error: ${error}`)
    //                 })
    //         })
    // }

    render() {
        return (
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
                        // onPress={() => this.props.navigation.navigate('Home')}
                        onPress={this.onLoginFacebook}
                    >
                        <Text style={styles.facebookLogin}>Đăng nhập qua Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this.onGoogleLogin}
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