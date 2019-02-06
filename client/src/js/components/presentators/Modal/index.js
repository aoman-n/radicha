/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import LoginModal from './LoginModal';
import CreateRoomModal from './CreateRoomModal';
import EjectFromRoomModal from './EjectFromRoomModal';

export default ({ modals, loginUser, createRoom, hideModal }) => {
  // const { isLoginModal, isCreateRoomModal, isEjectFromRoomModal } = modals;
  const { login, create, eject } = modals;
  return (
    <div>
      {login && (
        <Modal>
          <Overlay onClick={() => hideModal('login')} />
          <LoginModal {...{ hideModal, loginUser }} />
        </Modal>
      )}
      {create && (
        <Modal>
          <Overlay onClick={() => hideModal('create')} />
          <CreateRoomModal {...{ hideModal, createRoom }} />
        </Modal>
      )}
      {eject && (
        <Modal>
          <Overlay onClick={() => hideModal('eject')} />
          <EjectFromRoomModal {...{ hideModal }} />
        </Modal>
      )}
    </div>
  );
};

const Modal = styled.div`
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 2;
`;
const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
  transition: 0.3s;
`;
