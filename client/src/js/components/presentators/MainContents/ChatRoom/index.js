import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import MessageList from './MessageList';
import InputField from './InputField';
import UserList from './UserList';
import OnlyRoomMasterInfo from './OnlyRoomMasterInfo';

export default ({ sendMessage, chatRoom, app, removeRoom }) => {
  console.log(chatRoom.master.name);
  return (
    <React.Fragment>
      <InfoArea>
        {app.username === chatRoom.master.name && (
          <OnlyRoomMasterInfo {...{ removeRoom }} />
        )}
      </InfoArea>
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
};

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
const InfoArea = styled.div`
  height: 6%;
  box-sizing: border-box;
`;
const TopContainer = styled.div`
  height: 80%;
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
