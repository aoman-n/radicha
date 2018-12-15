import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import Home from '../presentators/Home';
import {
  sendMessage,
  receiveMessage,
  createConnection,
} from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      messages: state.message.messages,
    }),
    {
      sendMessage,
      receiveMessage,
      createConnection,
    },
  ),
  pure,
);

export default enhancer(Home);
