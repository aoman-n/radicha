/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

export default ({ closeEjectFromRoomModal }) => (
  <Modal>
    <TextContainer>ルームが解散となりました(´・ω・｀)</TextContainer>
    <CloseButton onClick={closeEjectFromRoomModal}>閉じる</CloseButton>
  </Modal>
);

const Modal = styled.div`
  width: 50%;
  height: 30%;
  margin: 1.5em auto 0;
  padding: 10px 20px;
  border: 2px solid #aaa;
  background: #fff;
  position: fixed;
  z-index: 2;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  text-align: center;
`;
const TextContainer = styled.p`
  padding: 60px;
`;
const CloseButton = styled.button`
  background: white;
  color: #696969;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #696969;
  border-radius: 3px;
  height: 40px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #696969;
    color: white;
    transition: 0.3s;
  }
`;
