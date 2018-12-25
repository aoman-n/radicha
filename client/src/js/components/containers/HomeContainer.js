import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import {
  toggleRoombar, showLoginModal, logoutUser, joinRoom,
} from '../../actions';
import Home from '../presentators/Home';

const enhancer = compose(
  connect(
    state => ({
      viewContents: state.viewContents,
      app: state.app,
    }),
    {
      toggleRoombar,
      showLoginModal,
      logoutUser,
      joinRoom,
    },
  ),
  pure,
);

export default enhancer(Home);
