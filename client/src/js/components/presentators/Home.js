/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import ModalContainer from '../containers/ModalContainer';

export default ({ match, viewContents, toggleRoombar, showLoginModal, logoutUser, joinRoom, app }) => {
  const { isRoomBar } = viewContents;
  const { username } = app;
  return (
    <Container>
      <ModalContainer />
      <HeaderArea>
        <Header {...{showLoginModal, toggleRoombar, username, logoutUser}} />
      </HeaderArea>
      <MainWrapper>
        <SideBar {...{isRoomBar}}><RoomBar {...{joinRoom}} /></SideBar>
        <ChatRoom>
          <Switch>
            <Route exact path={`${match.url}room/:roomId`} component={ChatContainer} />
          </Switch>        
        </ChatRoom>
      </MainWrapper>
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
  ${({ isRoomBar }) => isRoomBar ? css`
    width: 200px;
    opacity: 1;
    transition: 0.5s;
    transition-timing-function: ease-in-out;
    transform: none;
  ` : css`
    width: 0px;
    opacity: 0;
    transition: 0.5s;
    transition-timing-function: ease-in-out;
    transform: translateX(-200px);
  `}
  border-right: 1px solid #e5e5e5;
  background-color: #dcdcdc;
`
const ChatRoom = styled.div`
  flex: 1;
  background: white;
  box-shadow: inset 5px 5px 5px #ccc;
  padding: 20px 30px;
`
