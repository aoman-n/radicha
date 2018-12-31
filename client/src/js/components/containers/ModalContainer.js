import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import Modal from '../presentators/Modal';
import {
  closeLoginModal,
  loginUser,
  createRoom,
  closeCreateRoomModal,
} from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      modals: state.viewContents.modals,
      username: state.app.username,
    }),
    {
      closeLoginModal,
      loginUser,
      createRoom,
      closeCreateRoomModal,
    },
  ),
  pure,
);

export default enhancer(Modal);
