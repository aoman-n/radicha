/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Pets from '@material-ui/icons/Pets';
import Color from '../../constants/Color';

export default ({ users, master }) => (
  <Container>
    {users.map(user => (
      <User key={user.socket_id}>
        {master.name === user.name ? (
          <Pets style={{ paddingRight: 10, verticalAlign: '-20%' }} />
        ) : (
          <PermIdentity style={{ paddingRight: 10, verticalAlign: '-20%' }} />
        )}
        {user.name}
      </User>
    ))}
  </Container>
);

const Container = styled.ul`
  color: ${Color.gray30};
  width: 200px;
  padding: 10px 15px;
  font-size: 0.9em;
  box-sizing: border-box;
  border: 1px solid ${Color.gray10};
  overflow: scroll;
`;
const User = styled.li`
  height: 25px;
  vertical-align: middle;
`;
