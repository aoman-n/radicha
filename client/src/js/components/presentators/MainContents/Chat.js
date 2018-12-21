/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import { withState, withHandlers, pure, compose } from 'recompose';
import Entrance from './Entrance';
import SampleRoom from './SampleRoom';

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

const Ok = () => {
  return (
    <div>joined room</div>
  )
}

export default enhancer(({ sendMessage, createConnection, onChangeText, inputText, clearText, message, joinRoom, match }) => {
  const { socket, userName, joined } = message;
  const { path } = match;
  return (
    <React.Fragment>
      {
        socket ?
          <SampleRoom {...{sendMessage, onChangeText, inputText, clearText, message}} /> :
          <Entrance {...{createConnection, userName, path}} />
      }
    </React.Fragment>
  )
})

// const ChatRoom = ({ sendMessage, createConnection, onChangeText, inputText, clearText, message }) => {
//   const { messages } = message;
//   return (
//     <div>
//       {/* <button onClick={createConnection}>connect!!!</button>
//       <ul className="messages">
//         {messages.map((msg, i) => (
//           <li key={i}>{msg}</li>
//         ))}
//       </ul>
//       <form onSubmit={e => {
//         e.preventDefault();
//         sendMessage(inputText);
//         clearText();
//       }}>
//         <input type="text" value={inputText} onChange={onChangeText} />
//         <button type="submit">send</button>
//       </form> */}
//     </div>
//   )
// }