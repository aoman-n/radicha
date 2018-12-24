/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import { withState, withHandlers, pure, compose } from 'recompose';
import ChatRoom from './ChatRoom';
import Pending from '../shared/Pending';

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

export default enhancer(({ sendMessage, onChangeText, inputText, clearText, app, chatRoom }) => {
  const { pending } = chatRoom;
  console.log('ok');
  return (
    <React.Fragment>
      {
        pending ?
          <Pending /> :
          <ChatRoom {...{sendMessage, onChangeText, inputText, clearText, app, chatRoom}} />
      }
    </React.Fragment>
  )
})
