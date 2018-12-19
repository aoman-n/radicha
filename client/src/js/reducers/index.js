import { combineReducers } from 'redux';
import message from './message';
import viewContents from './viewContents';

export default combineReducers({
  message,
  viewContents,
});
