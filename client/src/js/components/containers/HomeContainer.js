import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import { toggleRoombar } from '../../actions';
import Home from '../presentators/Home';

const enhancer = compose(
  connect(
    state => ({
      isRoomBar: state.viewContents.isRoomBar,
    }),
    {
      toggleRoombar,
    },
  ),
  pure,
);

export default enhancer(Home);
