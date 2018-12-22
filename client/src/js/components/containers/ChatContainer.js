import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import Index from '../presentators/MainContents';
import {
  sendMessage,
  createConnection,
} from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      message: state.message,
    }),
    {
      sendMessage,
      createConnection,
    },
  ),
  pure,
);

export default enhancer(Index);
