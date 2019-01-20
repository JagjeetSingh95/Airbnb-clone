import { combineReducers } from 'redux';
import * as LoggedOut from './loggedOut';

export default combineReducers(Object.assign(
  LoggedOut
));