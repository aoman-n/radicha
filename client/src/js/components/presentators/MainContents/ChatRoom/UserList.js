import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import userIcon from '../../images/user_icon.png';

const UserList = ({ users, master }) => (
  <Container>
    {users.map((user, i) => (
      <User key={i}>
        <Icon alt="userIcon" src={userIcon} />
        {user.name}
      </User>
    ))}
  </Container>
);

const Container = styled.ul`
  padding: 1rem 1rem;
  overflow: auto;
`;
const User = styled.li`
  color: white;
  font-weight: normal;
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;
const Icon = styled.img`
  padding-right: 0.6rem;
  vertical-align: middle;
`;

export default UserList;
