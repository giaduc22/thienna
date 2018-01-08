import { StyleSheet } from 'react-native';
import * as Colors from '../../../../Themes/Colors';
import * as Metrics from '../../../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG
    },
    contentWrapper: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    contentText: {
        flex: 1,
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        marginVertical: 5,
        paddingRight: 20
    },
    noteText: {
        color: Colors.NAV_ICON_LIGHT_COLOR,
        backgroundColor: 'transparent',
        marginVertical: 5,
        paddingRight: 20
    },
    headerText: {
        color: Colors.NAV_ICON_LIGHT_COLOR,
        backgroundColor: 'transparent',
        marginVertical: 15,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
});