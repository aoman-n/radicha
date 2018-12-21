/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { withState, withHandlers, pure, compose } from 'recompose';

const enhancer = compose(
  pure,
);

export default enhancer(({ createConnection, userName, roomId }) => {
  return (
    <div>
      <button onClick={() => {
        createConnection(roomId);
      }}>join</button>
    </div>
  )
});