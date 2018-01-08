import { StyleSheet } from 'react-native';
import { SCREEN_BG } from '../../Themes/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SCREEN_BG,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingWrapper: {
        height: 54,
        width: 54,
        borderRadius: 7,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});