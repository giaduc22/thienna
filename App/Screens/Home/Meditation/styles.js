import { StyleSheet } from 'react-native';
import * as Colors from '../../../Themes/Colors';
import * as Metrics from '../../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        paddingTop: 20
    },
    header: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15,
        textAlign: 'center',
        flex: 1
    },
    sliderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sliderContainer: {
        width: Metrics.DEVICE_WIDTH - 120,
        marginHorizontal: 8
    },
    time: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        marginBottom: 2
    },
    trackStyle: {
        height: 8,
        borderRadius: 4
    },
    suportText: {
        color: '#00b6f8',
        backgroundColor: 'transparent',
        marginTop: 10,
        textAlign: 'center'
    },
    controlWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 10,
        justifyContent: 'space-between'
    },
    selectedTimeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeLabel: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    },
    selectedTime: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    },
    timeEvaluate: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5
    },
    startButton: {
        height: 50,
        width: Metrics.DEVICE_WIDTH - 10,
        borderRadius: 5,
        backgroundColor: '#37c77d',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startLabel: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    }
});