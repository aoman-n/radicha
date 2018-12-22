/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PermIdentity from '@material-ui/icons/PermIdentity';

export default ({ users }) => {
  return (
    <Container>
      {users.map((user, i) => (
        <User key={i}><PermIdentity style={{ paddingRight: 10, verticalAlign: '-20%' }} />{user}</User>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  color: ${Color.gray30};
  width: 180px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid ${Color.gray10};
`
const User = styled.li`
  height: 25px;
  vertical-align: middle;
`