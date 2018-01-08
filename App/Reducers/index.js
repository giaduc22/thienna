import { combineReducers } from 'redux';

import NavBar from './NavBar';
import Navigation from './Navigation';

export default combineReducers({
    navBar: NavBar,
    navigation: Navigation,
})