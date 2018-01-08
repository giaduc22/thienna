import { StyleSheet } from 'react-native';
import * as Metrics from '../Themes/Metrics';

export default StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
        borderTopWidth: Metrics.BORDER_WIDTH, 
        elevation: 4,
        padding: 0,
        height: 56
    },
    indicator: {
        height: 0
    },
    label: {
        fontSize: 11,
        marginTop: 2
    }
});