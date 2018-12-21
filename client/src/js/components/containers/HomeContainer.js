import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import { toggleRoombar, toggleLoginModal } from '../../actions';
import Home from '../presentators/Home';

const enhancer = compose(
  connect(
    state => ({
      viewContents: state.viewContents,
      message: state.message,
    }),
    {
      toggleRoombar,
      toggleLoginModal,
    },
  ),
  pure,
);

export default enhancer(Home);
