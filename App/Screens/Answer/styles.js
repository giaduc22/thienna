import { StyleSheet } from 'react-native';
import * as Colors from '../../Themes/Colors';
import * as Metrics from '../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        alignItems: 'center',
        padding: 10
    },
    questionWrapper: {
        minHeight: 50,
        padding: 5,
        width: Metrics.DEVICE_WIDTH - 20,
        backgroundColor: '#fdf6f0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    question: {
        color: '#e56561',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    tagsStyles: {
        
    },
    notification: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    }
});