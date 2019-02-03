import React from 'react';
import { pure, compose } from 'recompose';
import ChatRoom from './ChatRoom';
import Pending from '../shared/Pending';

const enhancer = compose(pure);

export default enhancer(({ sendMessage, app, chatRoom, removeRoom }) => (
  <React.Fragment>
    {chatRoom.pending ? (
      <Pending />
    ) : (
      <ChatRoom
        {...{
          sendMessage,
          app,
          chatRoom,
          removeRoom,
        }}
      />
    )}
  </React.Fragment>
));
