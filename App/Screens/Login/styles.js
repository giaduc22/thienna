import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    logoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    appName: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontSize: 18,
        marginTop: 7
    },
    loginButton: {
        height: 50,
        width: DEVICE_WIDTH - 20,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    facebookLogin: {
        color: '#2760fd',
        backgroundColor: 'transparent',
        fontSize: 15
    },
    googleLogin: {
        color: '#e54c47',
        backgroundColor: 'transparent',
        fontSize: 15
    },
});