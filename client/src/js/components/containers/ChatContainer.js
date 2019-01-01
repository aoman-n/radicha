import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Index from '../presentators/MainContents';
import { sendMessage, joinRoom } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      app: state.app,
      chatRoom: state.chatRoom,
    }),
    {
      sendMessage,
      joinRoom,
    },
  ),
  lifecycle({
    componentWillMount() {
      const { joinRoom, match, app } = this.props;
      // 直接URLを叩かれたときの暫定的な対応、socketがsetされるまで待つ
      // @TODO: REFACTOR
      if (!app.socket) {
        setTimeout(() => {
          joinRoom(match.params.roomId);
        }, 2000);
      }
      joinRoom(match.params.roomId);
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        const { joinRoom, match } = nextProps;
        joinRoom(match.params.roomId);
      }
    },
  }),
  pure,
);

export default enhancer(({ app, chatRoom, sendMessage }) => (
  <Index {...{ app, chatRoom, sendMessage }} />
));
