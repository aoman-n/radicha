/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import Index from './MainContents/';

export default ({ match, isRoomBar, toggleRoombar }) => {
  return (
    <Container>
      <HeaderArea>
        <Header toggle={toggleRoombar} />
      </HeaderArea>
      <MainWrapper>
        <SideBar isRoomBar={isRoomBar}><RoomBar /></SideBar>
        <ChatRoom>
          <Index />
        </ChatRoom>
      </MainWrapper>
      {/* <div css={roombar}>
        <RoomBar />
      </div> */}
      {/* <div css={chat}>
        <Index />
        <Route exact path={`${match.url}general`} component={ChatContainer} />
        <Route exact path={`${match.url}sample`} component={Index} />
      </div> */}
    </Container>
  )
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
const HeaderArea = styled.div`
  height: 60px;
  width: 100%;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
`
const MainWrapper = styled.div`
  display: flex;
  height: calc(100% - 60px);
`
const SideBar = styled.div`
  position: relative;
  ${({ isRoomBar }) => isRoomBar ? css`
    width: 200px;
    opacity: 1;
    left: 0px;
    transition: 0.5s;
  ` : css`
    width: 0px;
    opacity: 0;
    left: -200px;
    transition: 0.5s;
  `}
  border-right: 1px solid #e5e5e5;
`
const ChatRoom = styled.div`
  flex: 1;
  background: #dcdcdc;
  box-shadow: inset 5px 5px 5px #ccc;
  padding: 20px 30px;
`
