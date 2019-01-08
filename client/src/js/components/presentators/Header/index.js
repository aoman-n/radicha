/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '../constants/Color';

export default ({ showLoginModal, toggleRoombar, logoutUser, username }) => (
  <Container>
    <Icon onClick={toggleRoombar}>
      <FontAwesomeIcon icon="bars" size="lg" />
    </Icon>
    <Link css={title} to="/">
      <h1 />
    </Link>
    <nav css={nav}>
      {username || username !== null ? (
        <ul css={ul}>
          <Li onClick={showLoginModal}>
            <Name>{username}</Name>
            でログイン中
          </Li>
          <Link to="/">
            <Li onClick={logoutUser}>ログアウト</Li>
          </Link>
        </ul>
      ) : (
        <ul css={ul}>
          <Li onClick={showLoginModal}>ログイン</Li>
        </ul>
      )}
    </nav>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9em;
`;
const Icon = styled.div`
  margin: 20px;
  color: ${Color.gray20};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`;
const title = css`
  font-size: 20px;
  color: ${Color.gray30};
  vertical-align: bottom;
  font-weight: 700;
  font-style: italic;
  margin-right: auto;
  text-align: center;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`;
const nav = css`
  color: gray;
`;
const ul = css`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 30px;
  cursor: pointer;
  color: ${Color.gray30};
  &:hover {
    opacity: 0.8;
  }
  &:before {
    position: absolute;
    top: 1.3em;
    left: 0;
    content: '';
    display: inline-block;
    width: 0;
    height: 2px;
    background: ${Color.skyblue};
    transition: 0.4s;
  }
  &:hover:before {
    width: 100%;
  }
`;
const Name = styled.span`
  color: #ff69b4;
  font-weight: 700;
  padding-right: 5px;
`;
