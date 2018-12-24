import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import Modal from '../presentators/Modal';
import { closeLoginModal, loginUser } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      modals: state.viewContents.modals,
      username: state.app.username,
    }),
    {
      closeLoginModal,
      loginUser,
    },
  ),
  pure,
);

export default enhancer(Modal);
