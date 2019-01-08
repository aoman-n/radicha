/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import ModalContainer from '../containers/ModalContainer';

export default ({
  match,
  viewContents,
  toggleRoombar,
  showLoginModal,
  showCreateRoomModal,
  logoutUser,
  joinRoom,
  app,
}) => {
  const { isRoomBar, roomList } = viewContents;
  const { username } = app;
  return (
    <Container>
      <ModalContainer />
      <HeaderArea>
        <Header {...{ showLoginModal, toggleRoombar, username, logoutUser }} />
      </HeaderArea>
      <MainWrapper>
        <Drawer isRoomBar={isRoomBar}>
          <RoomBar {...{ joinRoom, showCreateRoomModal, roomList }} />
        </Drawer>
        <ChatRoom>
          <Switch>
            <Route
              exact
              path={`${match.url}room/:roomId`}
              component={ChatContainer}
            />
          </Switch>
        </ChatRoom>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const HeaderArea = styled.div`
  height: 54px;
  width: 100%;
  background: #f5f5f5;
`;
const MainWrapper = styled.div`
  display: flex;
  height: calc(100% - 60px);
`;
const Drawer = styled.div`
  width: ${({ isRoomBar }) => (isRoomBar ? 230 : 0)}px;
  transform: translateX(${({ isRoomBar }) => (isRoomBar ? 0 : -230)}px);
  opacity: ${({ isRoomBar }) => (isRoomBar ? 1 : 0)};
  border-right: 1px solid #e5e5e5;
  background-color: #dcdcdc;
  transition: 0.6s;
  /* box-shadow: 4px 0px 4px -1px rgba(0, 0, 0, 0.31); */
`;
const ChatRoom = styled.div`
  flex: 1;
  background: white;
  padding: 20px 30px;
`;
