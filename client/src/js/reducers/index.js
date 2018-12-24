import { combineReducers } from 'redux';
import app from './app';
import chatRoom from './chatRoom';
import viewContents from './viewContents';

export default combineReducers({
  app,
  chatRoom,
  viewContents,
});
