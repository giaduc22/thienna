import { StyleSheet } from 'react-native';
import * as Colors from '../../../Themes/Colors';
import * as Metrics from '../../../Themes/Metrics';

const ITEM_HEIGHT = (Metrics.DEVICE_HEIGHT - 158) / 2;
const ITEM_WIDTH = Metrics.DEVICE_WIDTH - 14;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        padding: 7,
        justifyContent: 'space-between'
    },
    item: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        borderRadius: 6,
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
    image: {
        height: ITEM_HEIGHT - 60,
        width: ITEM_WIDTH,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    introduceWrapper: {
        height: ITEM_HEIGHT - 60,
        width: ITEM_WIDTH,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
        justifyContent: 'space-between'
    },
    introduceHeader: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    introduce: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'bold'
    },
    footer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    startButtonWrapper: {
        padding: 1.25,
        backgroundColor: Colors.NAV_ICON_LIGHT_COLOR,
        borderRadius: 5.25
    },
    startButton: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    startLabel: {
        color: Colors.NAV_ICON_LIGHT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    },
    helpIntroText: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        flex: 1,
        paddingRight: 5
    }
});