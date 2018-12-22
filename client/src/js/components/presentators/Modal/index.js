/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import LoginModal from './LoginModal';

export default ({ modals, closeLoginModal, loginUser, userName }) => {
  const { isLoginModal, isCreateRoomModal } = modals;
  return (
    <div>
    {isLoginModal && <Modal><LoginModal {...{closeLoginModal, loginUser}} /></Modal>}
    </div>
  )
}

const Modal = styled.div`
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 2;
`