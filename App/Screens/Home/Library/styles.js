import { StyleSheet } from 'react-native';
import * as Colors from '../../../Themes/Colors';
import * as Metrics from '../../../Themes/Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerIcon: {
        height: 24,
        width: 24,
        tintColor: Colors.NAV_ICON_DARK_COLOR
    },
    headerText: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent',
        fontSize: 15,
        marginLeft: 8
    }
});

export const ITEM_STYLES = StyleSheet.create({
    item: {
        height: 64, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: {
        height: 50,
        width: 50,
        tintColor: Colors.NAV_ICON_LIGHT_COLOR
    },
    rightContentWrapper: {
        flex: 1,
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        borderBottomWidth: Metrics.BORDER_WIDTH,
        borderColor: Colors.BORDER_COLOR
    },
    contentWrapper: {
        flex: 1,
        paddingRight: 9
    },
    title: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16
    },
    subTitle: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent'
    }
});

export const MEDIA_ITEM_STYLES = StyleSheet.create({
    item: {
        height: 50, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: {
        height: 24,
        width: 24,
        tintColor: Colors.NAV_ICON_LIGHT_COLOR
    },
    rightContentWrapper: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        borderBottomWidth: Metrics.BORDER_WIDTH,
        borderColor: Colors.BORDER_COLOR
    },
    contentWrapper: {
        flex: 1,
        paddingRight: 9
    },
    title: {
        color: Colors.NORMAL_TEXT_COLOR,
        backgroundColor: 'transparent',
        fontSize: 16
    },
    subTitle: {
        color: Colors.NAV_ICON_DARK_COLOR,
        backgroundColor: 'transparent'
    }
});