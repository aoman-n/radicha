/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import Color from '../constants/Color';

export default ({ showLoginModal, toggleRoombar, logoutUser, username }) => (
  <Container>
    <Logo to="/">
      <Image alt="Logo Image" src={logoImage} />
    </Logo>
    <Nav>
      {username || username !== null ? (
        <Ul>
          <Li onClick={showLoginModal}>
            使用中の名前：
            <Name>{username}</Name>
          </Li>
          <Link to="/">
            <Li onClick={logoutUser}>ログアウト</Li>
          </Link>
        </Ul>
      ) : (
        <Ul>
          <Li onClick={showLoginModal}>ログイン</Li>
        </Ul>
      )}
    </Nav>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled(Link)`
  color: ${Color.gray30};
  margin-right: auto;
  padding: 0 30px;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
const Image = styled.img``;
const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  font-size: 0.9rem;
  color: white;
  position: relative;
  display: inline-block;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:before {
    position: absolute;
    top: 1.3em;
    left: 0;
    content: '';
    display: inline-block;
    width: 0;
    height: 2px;
    background: ${Color.accent};
    transition: 0.4s;
  }
  &:hover:before {
    width: 100%;
  }
`;
const Name = styled.span`
  color: white;
  font-weight: 700;
  padding-right: 5px;
`;
