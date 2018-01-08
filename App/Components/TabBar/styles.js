import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../Themes/Metrics';
import * as Colors from '../../Themes/Colors';

const TAB_BAR_HEIGHT = 52;

export const styles = StyleSheet.create({
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 6,
	},
	tabs: {
		height: TAB_BAR_HEIGHT,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		paddingTop: 5,
		backgroundColor: '#ffffff',
	},
	icon: {
		width: 24,
		height: 24,
	},
	labelText:{
		fontSize: 12,
		backgroundColor: 'transparent'
	},
	separator: {
		height: 0.5,
		backgroundColor: '#dedede'
	}
});