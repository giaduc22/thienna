import { SET_MAIN_NAVIGATION } from './types';

export const setMainNavigation = (navigation) => {
    return {
        type: SET_MAIN_NAVIGATION,
        navigation
    }
}