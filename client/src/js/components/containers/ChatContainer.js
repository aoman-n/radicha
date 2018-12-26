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
  lifecycle({}),
  pure,
);

export default enhancer(({ app, chatRoom, sendMessage }) => (
  <Index {...{ app, chatRoom, sendMessage }} />
));
