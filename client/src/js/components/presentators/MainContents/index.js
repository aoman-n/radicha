import React from 'react';
import { pure, compose } from 'recompose';
import ChatRoom from './ChatRoom';
import Pending from '../shared/Pending';

const enhancer = compose(pure);

export default enhancer(({ sendMessage, app, chatRoom }) => {
  const { pending } = chatRoom;
  return (
    <React.Fragment>
      {pending ? (
        <Pending />
      ) : (
        <ChatRoom
          {...{
            sendMessage,
            app,
            chatRoom,
          }}
        />
      )}
    </React.Fragment>
  );
});
