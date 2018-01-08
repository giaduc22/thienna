import { StyleSheet, Dimensions, Platform } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const BORDER_WIDTH = StyleSheet.hairlineWidth;

export const NAV_BAR_HEIGHT = 60;
export const NAV_BUTTON_SIZE = 60;

export const TAB_ICON_SIZE = 24;

export const INTRODUCE_HEADER_WIDTH = DEVICE_WIDTH * 2 / 3;

// export const SIGN_IN_BUTTON_WIDTH = DEVICE_WIDTH / 3 + 45;
// export const FACEBOOK_BUTTON_WIDTH = DEVICE_WIDTH - 80;
// export const PHONE_BUTTON_WIDTH = DEVICE_WIDTH - 80;