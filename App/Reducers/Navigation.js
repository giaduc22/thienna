import { SET_MAIN_NAVIGATION } from '../Actions/types';

const INITIAL_STATE = {
    mainNavigation: null
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case SET_MAIN_NAVIGATION:
            return { ...state, mainNavigation: action.navigation };
        default:
            return state;
    }
}