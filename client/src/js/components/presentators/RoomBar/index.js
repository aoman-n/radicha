/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink, withRouter } from 'react-router-dom';
import Color from '../constants/Color';

export default withRouter(props => {
  const { showCreateRoomModal, roomList } = props;
  return (
    <Container>
      <CreateRoom>
        <Button onClick={() => showCreateRoomModal()}>部屋を作成</Button>
      </CreateRoom>
      <RoomList>
        {roomList.map(roomName => (
          <Li
            key={roomName}
            activeStyle={{ borderBottom: `2px solid ${Color.green20}` }}
            to={`/room/${roomName}`}
          >
            {roomName}
          </Li>
        ))}
      </RoomList>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const CreateRoom = styled.div`
  height: 50px;
  background: ${Color.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 80%;
  background: ${Color.accent};
  color: white;
  font-size: 1.1rem;
  border: 2px solid white;
  border-radius: 10px;
  height: 35px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: white;
    color: ${Color.accent};
    border: 2px solid ${Color.accent};
    transition: 0.3s;
  }
`;
const RoomList = styled.div`
  height: calc(100% - 50px);
  background: ${Color.gray};
  overflow: auto;
`;
const Li = styled(NavLink)`
  display: block;
  padding: 0.8rem 30px;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    border-left: 5px solid ${Color.main};
    background: ${Color.lightGray};
    color: ${Color.gray};
    cursor: pointer;
    transition: 0.3s;
  }
`;
