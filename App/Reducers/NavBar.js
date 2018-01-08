import { SET_NAV_BAR_LABEL } from '../Actions/types';

const INITIAL_STATE = {
    navBarLabel: 'Thực hành'
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case SET_NAV_BAR_LABEL:
            return { ...state, navBarLabel: action.payload };
        default:
            return state;
    }
}