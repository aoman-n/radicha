/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import { withState, withHandlers, pure, compose } from 'recompose';
import Entrance from './Entrance';
import ChatRoom from './ChatRoom';

const enhancer = compose(
  withState('inputText', 'updateText', ''),
  withHandlers({
    onChangeText: ({ updateText }) => e => {
      updateText(e.target.value);
    },
    clearText: ({ updateText }) => () => {
      updateText('');
    },
  }),
  pure,
);

export default enhancer(({ sendMessage, createConnection, onChangeText, inputText, clearText, message, match }) => {
  const { socket, userName } = message;
  const { params: { roomId } } = match;
  return (
    <React.Fragment>
      {
        socket ?
          <ChatRoom {...{sendMessage, onChangeText, inputText, clearText, message}} /> :
          <Entrance {...{createConnection, userName, roomId}} />
      }
    </React.Fragment>
  )
})
