/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Color from '../constants/Color';

export default withRouter(props => {
  const { joinRoom, showCreateRoomModal, roomList } = props;
  return (
    <Ul>
      <CreateRoom style={createRoomButtonStyle} onClick={showCreateRoomModal}>
        Create The Room
      </CreateRoom>
      {roomList.map((room, i) => (
        <Li key={i} onClick={() => joinRoom(room)}>
          <NavLink
            activeStyle={{ borderBottom: `2px solid ${Color.green20}` }}
            css={roomLink}
            to={`/room/${room}`}
          >
            {room}
          </NavLink>
        </Li>
      ))}
    </Ul>
  );
});

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;
const createRoomButtonStyle = {
  color: '#ff69b4',
  fontWeight: '700',
};
const Li = styled.li`
  flex-basis: 40px;
  line-height: 40px;
  padding: 0 10px;
  transition: 0.3s;
  color: gray;
  &:hover {
    border-left: 6px solid ${Color.green30};
    cursor: pointer;
    background: ${Color.green10};
    transition: 0.2s;
  }
`;
const Icon = styled.div`
  float: right;
  margin-right: 5px;
`;
const roomLink = css`
  text-decoration: none;
  color: gray;
  width: 100%;
  height: 100%;
  display: inline-block;
`;
const CreateRoom = styled(Button)``;
