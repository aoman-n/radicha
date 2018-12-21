import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '../../constants/Color';
import MessageList from './MessageList';
import InputField from './InputField';

export default ({ sendMessage, onChangeText, inputText, clearText, message }) => {
  return (
    <React.Fragment>
      <TopContainer>
        <CommunicateArea>
          <Radio>radio</Radio>
          <MessageList {...{message}}　/>
        </CommunicateArea>
        <UserList>
          { message.users.map((user, i) => (
            <User key={i}><FontAwesomeIcon style={{ paddingRight: 10 }} icon="user" />{user}</User>
          ))}
        </UserList>
      </TopContainer>
      <InputField {...{sendMessage, onChangeText, inputText, clearText}} />
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
`
const TopContainer = styled.div`
  height: 86%;
  display: flex;
  border: 1px solid ${Color.gray10};
`
const CommunicateArea =styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Color.gray10};
`
const Radio = styled.div`
  height: 70px;
  margin: 10px 20px;
  border-bottom: 1px solid ${Color.gray10};
  box-sizing: border-box;
`
const UserList = styled.ul`
  color: ${Color.gray30};
  width: 180px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid ${Color.gray10};
`
const User = styled.li`
  height: 25px;
`