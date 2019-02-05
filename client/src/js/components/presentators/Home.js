/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import Color from './constants/Color';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import ModalContainer from '../containers/ModalContainer';

export default ({
  match,
  viewContents,
  toggleRoombar,
  showModal,
  logoutUser,
  app,
}) => {
  const { isRoomBar, roomList } = viewContents;
  const { username } = app;
  console.log(showModal);
  return (
    <Container>
      <ModalContainer />
      <HeaderArea>
        <Header {...{ showModal, toggleRoombar, username, logoutUser }} />
      </HeaderArea>
      <MainWrapper>
        <Drawer isRoomBar={isRoomBar}>
          <RoomBar {...{ roomList, showModal }} />
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
  height: 58px;
  width: 100%;
  background-image: linear-gradient(-180deg, #70dcb7 0%, #3db680 100%);
`;
const MainWrapper = styled.div`
  display: flex;
  height: calc(100% - 58px);
`;
const Drawer = styled.div`
  flex-basis: ${({ isRoomBar }) => (isRoomBar ? 230 : 0)}px;
  transform: translateX(${({ isRoomBar }) => (isRoomBar ? 0 : -230)}px);
  opacity: ${({ isRoomBar }) => (isRoomBar ? 1 : 0)};
  border-right: 1px solid #e5e5e5;
  /* background-color: ${Color.gray}; */
  transition: 0.7s;
  /* box-shadow: 4px 0px 4px -1px rgba(0, 0, 0, 0.31); */
`;
const ChatRoom = styled.div`
  flex: 1;
  /* background: white;
  padding: 20px 30px; */
`;
