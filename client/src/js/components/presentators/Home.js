/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withState, withHandlers, pure, compose } from 'recompose';

const style = css`
  color: hotpink;
`

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

export default enhancer(({ sendMessage, createConnection, onChangeText, inputText, clearText, messages }) => {
  return (
    <div css={style}>
      <button onClick={createConnection}>connect!!!</button>
      <ul className="messages">
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={e => {
        e.preventDefault();
        sendMessage(inputText);
        clearText();
      }}>
        <input type="text" value={inputText} onChange={onChangeText} />
        <button type="submit">send</button>
      </form>
    </div>
  )
});
