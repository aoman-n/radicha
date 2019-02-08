/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import LoginModal from './LoginModal';
import CreateRoomModal from './CreateRoomModal';
import EjectFromRoomModal from './EjectFromRoomModal';

export default ({ modals, loginUser, createRoom, hideModal }) => {
  const { login, create, eject } = modals;
  return (
    <PoseGroup>
      {login && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <LoginModal {...{ hideModal, loginUser }} />
        </StyledModal>,
      ]}
      {create && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <CreateRoomModal {...{ hideModal, createRoom }} />
        </StyledModal>,
      ]}
      {eject && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <EjectFromRoomModal {...{ hideModal }} />
        </StyledModal>,
      ]}
    </PoseGroup>
  );
};

const Modal = posed.div({
  enter: {
    opacity: 1,
    y: '-50%',
    x: '-50%',
    delay: 300,
    transition: {
      default: { duration: 200 },
    },
  },
  exit: {
    opacity: 0,
    y: '-20%',
    x: '-50%',
    transition: { duration: 200 },
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 60%;
  background: white;
  border-radius: 10px;
  z-index: 2;
`;

const StyledShade = styled(Shade)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.6);
`;
