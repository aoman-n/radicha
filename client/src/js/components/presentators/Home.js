/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';

const container = css`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 47px 1fr;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    'header header'
    'roombar chat'
  ;
`

const header = css`
  grid-area: header;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  /* box-shadow: inset 0 -1px 0 rgba(100,121,143,0.122); */
`

const roombar = css`
  grid-area: roombar;
  border-right: 1px solid #e5e5e5;
`

const chat = css`
  grid-area: chat;
  background: pink;
`

export default () => {
  return (
    <div css={container}>
      <div css={header}>
        <Header />
      </div>
      <div css={roombar}>
        <RoomBar />
      </div>
      <div css={chat}>
        <ChatContainer />
      </div>
    </div>
  )
};
