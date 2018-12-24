import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import { toggleRoombar, showLoginModal, logoutUser } from '../../actions';
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
    },
  ),
  pure,
);

export default enhancer(Home);
