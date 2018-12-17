/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import Sample from './Sample';

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
`

const roombar = css`
  grid-area: roombar;
  border-right: 1px solid #e5e5e5;
`

const chat = css`
  grid-area: chat;
  background: #dcdcdc;
  box-shadow: inset 5px 5px 5px #ccc;
`

export default ({ match }) => {
  return (
    <div css={container}>
      <div css={header}>
        <Header />
      </div>
      <div css={roombar}>
        <RoomBar />
      </div>
      <div css={chat}>
        <Route exact path={`${match.url}general`} component={ChatContainer} />
        <Route path={`${match.url}sample`} component={Sample} />
      </div>
    </div>
  )
};
