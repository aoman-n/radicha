/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import LoginModal from './LoginModal';
import CreateRoomModal from './CreateRoomModal';

export default ({
  modals,
  closeLoginModal,
  loginUser,
  createRoom,
  closeCreateRoomModal,
}) => {
  const { isLoginModal, isCreateRoomModal } = modals;
  return (
    <div>
      {isLoginModal && (
        <Modal>
          <Overlay onClick={closeLoginModal} />
          <LoginModal {...{ closeLoginModal, loginUser }} />
        </Modal>
      )}
      {isCreateRoomModal && (
        <Modal>
          <Overlay onClick={closeCreateRoomModal} />
          <CreateRoomModal {...{ closeCreateRoomModal, createRoom }} />
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
