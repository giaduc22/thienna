import { StyleSheet } from 'react-native';
import * as Colors from '../../Themes/Colors';
import * as Metrics from '../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        width: Metrics.DEVICE_WIDTH,
        height: Metrics.DEVICE_HEIGHT - 85,
        backgroundColor: Colors.SCREEN_BG,
        alignItems: 'center'
    },
    notification: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    },
    inputWrapper: {
        height: 50,
        width: Metrics.DEVICE_WIDTH - 20,
        marginBottom: 10,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#dedede',
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    largeinputWrapper: {
        height: 200,
        width: Metrics.DEVICE_WIDTH - 20,
        marginBottom: 10,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#dedede',
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        height: 50,
        width: Metrics.DEVICE_WIDTH - 20,
        borderRadius: 5,
        backgroundColor: '#37c77d',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    }
});