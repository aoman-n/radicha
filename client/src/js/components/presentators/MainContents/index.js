import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '../constants/Color';
import MessageList from './MessageList';
import InputField from './InputField';
import { users } from '../mock';

export default () => {
  return (
    <React.Fragment>
      <TopContainer>
        <CommunicateArea>
          <Radio>radio</Radio>
          <MessageList　/>
        </CommunicateArea>
        <UserList>
          { users.map((user, i) => (
            <User key={i}><FontAwesomeIcon style={{ paddingRight: 10 }} icon="user" />{user}</User>
          ))}
        </UserList>
      </TopContainer>
      <InputField />
    </React.Fragment>
  );
};

const TopContainer = styled.div`
  height: 86%;
  display: flex;
  border: 1px solid ${Color.gray10};
`
const CommunicateArea =styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Color.gray20};
`
const Radio = styled.div`
  height: 70px;
  margin: 10px 20px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
`
const UserList = styled.ul`
  width: 180px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid ${Color.gray20};
`
const User = styled.li`
  height: 25px;
`