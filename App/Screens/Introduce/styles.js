import { StyleSheet } from 'react-native';
import * as Metrics from '../../Themes/Metrics';
import * as Colors from '../../Themes/Colors';

const HEADER_WIDTH = Metrics.INTRODUCE_HEADER_WIDTH;
const ITEM_WIDTH = ( Metrics.DEVICE_WIDTH - 74 ) / 3;
const ITEM_HEIGHT = 40;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    swipeContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        alignItems: 'center'
    },
    pagination: {
        paddingLeft: 20,
        justifyContent: 'flex-start'
    },
    controlButton: {
        padding: 2,
        position: 'absolute',
        bottom: 18,
        right: 18,
    },
    controlText: {
        color: '#e56561',
        backgroundColor: 'transparent',
        fontSize: 15
    },
    headerWrapper: {
        width: HEADER_WIDTH,
        backgroundColor: '#fdf6f0',
        borderBottomLeftRadius: HEADER_WIDTH / 2,
        borderBottomRightRadius: HEADER_WIDTH / 2,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 30
    },
    headerText: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30
    },
    introduceText: {
        textAlign: 'center',
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15
    },
    introduceTextWrapper: {
        padding: 30,
        flex: 1
    },
    itemWrapper: {
        backgroundColor: '#e56561',
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        borderRadius: ITEM_HEIGHT / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        height: ITEM_HEIGHT - 2.5,
        width: ITEM_WIDTH - 2.5,
        borderRadius: (ITEM_HEIGHT - 2.5) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    itemLabel: {
        color: '#e56561',
        backgroundColor: 'transparent'
    },
    orderWrapper: {
        padding: 30,
        width: Metrics.DEVICE_WIDTH - 60,
        flex: 1,
        alignItems: 'flex-start',
    },
    orderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 20
    },
    checkWrapper: {
        height: 42.5,
        width: 42.5,
        borderRadius: 42.5 / 2,
        backgroundColor: '#e56561',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkCircle: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        height: 20,
        width: 20,
        tintColor: '#e56561'
    },
    orderText: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16,
        marginLeft: 11
    },
    linkLine: {
        height: 25,
        width: 2,
        backgroundColor: '#e56561',
        marginLeft: 42.5 / 2
        // position
    }
});