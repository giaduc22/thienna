import { StyleSheet } from 'react-native';
import * as Colors from '../../Themes/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        padding: 10
    },
    text: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16
    }
});