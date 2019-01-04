import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import MessageList from './MessageList';
import InputField from './InputField';
import UserList from './UserList';

export default ({ sendMessage, chatRoom, app }) => (
  <React.Fragment>
    <TopContainer>
      <CommunicateArea>
        <Radio>radio</Radio>
        <MessageList messages={chatRoom.messages} />
      </CommunicateArea>
      <UserList users={chatRoom.users} master={chatRoom.master} />
    </TopContainer>
    <InputField {...{ sendMessage }} />
  </React.Fragment>
);

const Wrapper = styled.div`
  animation-duration: 2s;
  animation-name: fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const TopContainer = styled.div`
  height: 86%;
  display: flex;
  border: 1px solid ${Color.gray10};
`;
const CommunicateArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Color.gray10};
`;
const Radio = styled.div`
  height: 70px;
  margin: 10px 20px;
  border-bottom: 1px solid ${Color.gray10};
  box-sizing: border-box;
`;
