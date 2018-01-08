import { StyleSheet } from 'react-native';
import * as Colors from '../../../../Themes/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notification: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    }
});