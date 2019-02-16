import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { withRouter } from 'react-router-dom';
import UserListBar from '../presentators/MainContents/ChatRoom/UserListBar';
import { startDirectMessage, showModal } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      roomUsers: state.chatRoom.users,
      directMessageUsers: Object.values(state.directMessage.directMessage).map(
        item => item.name,
      ),
    }),
    {
      startDirectMessage,
      showModal,
    },
  ),
  pure,
);

export default enhancer(UserListBar);
