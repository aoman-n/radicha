import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import userIcon from '../../images/user_icon.png';
import messageIcon from '../../images/message_icon.png';

const directMessageList = ['aoba', 'anohana', 'あおひろ'];

const UserList = ({ users, master, showModal, startDirectMessage }) => (
  <React.Fragment>
    <UserListArea>
      <Title>Room内のユーザー</Title>
      <Ul>
        {users.map((user, i) => (
          <Li
            key={i}
            onClick={() => {
              startDirectMessage({ name: user.name, socketId: user.socket_id });
              showModal('direct');
            }}
          >
            <Icon alt="userIcon" src={userIcon} />
            {user.name}
          </Li>
        ))}
      </Ul>
    </UserListArea>
    <DirectMessageArea>
      <Title>ダイレクトメッセージ</Title>
      <Ul>
        {directMessageList.map((direct, i) => (
          <Li key={direct}>
            <Icon alt="me" src={messageIcon} />
            {direct}
          </Li>
        ))}
      </Ul>
    </DirectMessageArea>
  </React.Fragment>
);

const UserListArea = styled.div`
  padding: 1rem 1rem;
  overflow-y: auto;
  height: 60%;
  box-sizing: border-box;
  color: white;
`;
const Title = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;
const Ul = styled.ul``;
const Li = styled.li`
  font-weight: normal;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const Icon = styled.img`
  padding-right: 0.6rem;
  vertical-align: middle;
  height: 10px;
`;
const DirectMessageArea = styled.div`
  padding: 1rem 1rem;
  overflow-y: auto;
  height: 40%;
  box-sizing: border-box;
  color: white;
`;

export default UserList;
