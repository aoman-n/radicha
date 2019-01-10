/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Color from '../constants/Color';

export default withRouter(props => {
  const { showCreateRoomModal, roomList } = props;
  return (
    <React.Fragment>
      <Title
        onClick={() => {
          showCreateRoomModal();
        }}
      >
        チャットルームリスト　　+
      </Title>
      <Ul>
        {roomList.map((room, i) => (
          <Li key={i}>
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
    </React.Fragment>
  );
});

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  overflow: hidden;
`;
const Title = styled.h3`
  padding: 20px 10px;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    opacity: 0.7;
  }
`;
const Li = styled.li`
  flex-basis: 40px;
  line-height: 40px;
  padding: 0 23px;
  transition: 0.3s;
  color: gray;
  overflow: hidden;
  &:hover {
    border-left: 6px solid ${Color.green30};
    cursor: pointer;
    background: ${Color.green10};
    transition: 0.3s;
  }
`;
const roomLink = css`
  text-decoration: none;
  color: gray;
  width: 100%;
  height: 100%;
  display: inline-block;
`;
const CreateRoom = styled(Button)``;
