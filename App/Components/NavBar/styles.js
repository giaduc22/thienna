import { StyleSheet } from 'react-native';
import * as Metrics from '../../Themes/Metrics';
import * as Colors from '../../Themes/Colors';

export default StyleSheet.create({
    container: {
        height: 85,
        width: Metrics.DEVICE_WIDTH,
        // position: 'absolute',
        // top: 0,
        // left: 0
    },
    navBar: {
        height: Metrics.NAV_BAR_HEIGHT,
        width: Metrics.DEVICE_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.NAV_BAR_COLOR,
        borderBottomWidth: 0.5,
        borderColor: '#dedede',
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 2,
    },
    button: {
        height: Metrics.NAV_BUTTON_SIZE,
        width: Metrics.NAV_BUTTON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        tintColor: Colors.NAV_ICON_LIGHT_COLOR,
        width: 24,
        height: 24
    },
    label: {
        color: Colors.NAV_LABEL_COLOR,
        backgroundColor: 'transparent',
        fontSize: 18,
        fontWeight: 'bold'
    }
});