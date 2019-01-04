/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

export default ({ removeRoom }) => (
  <Container>
    <Text>あなたはこの部屋のマスターです！</Text>
    <RemoveRoomButton
      onClick={() => {
        removeRoom();
      }}
    >
      ルームを削除する
    </RemoveRoomButton>
  </Container>
);

const Container = styled.div`
  height: 100%;
`;
const Text = styled.span`
  vertical-align: middle;
`;
const RemoveRoomButton = styled.button`
  background: #ff0040;
  color: white;
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 2px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: 0.2s;
  }
`;
