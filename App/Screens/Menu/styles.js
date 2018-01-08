import { StyleSheet } from 'react-native';
import * as Colors from '../../Themes/Colors';
import * as Metrics from '../../Themes/Metrics';

const LOGOUT_COLOR = '#c0c1c4';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBg: {
        width: Metrics.DEVICE_WIDTH,
        height: Metrics.DEVICE_HEIGHT
    },
    contentWrapper: {
        height: Metrics.DEVICE_HEIGHT,
        width: Metrics.DEVICE_WIDTH,
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: 25
    },
    headerWrapper: {
        flex: 1,
        paddingHorizontal: 10,
    },
    closeButton: {
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon: {
        width: 18,
        height: 18,
        tintColor: '#ffffff',
    },
    userWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    avatarWrapper: {
        height: 66.5,
        width: 66.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 33.25
    },
    avatar: {
        height: 64,
        width: 64,
        borderRadius: 32
    },
    name: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 7
    },
    mail: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    menuWrapper: {
        flex: 2.5,
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: 'space-between'
    },
    topMenuWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomMenuWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    menuButton: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 170
    },
    menuLabel: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16
    },
    badgeWrapper: {
        backgroundColor: Colors.NAV_ICON_LIGHT_COLOR,
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 5,
        marginLeft: 9
    },
    badge: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    logoutLabel: {
        color: LOGOUT_COLOR,
        backgroundColor: 'transparent',
        marginLeft: 6,
        fontSize: 16
    },
});