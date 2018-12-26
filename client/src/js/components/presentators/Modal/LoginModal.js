/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { withState, withHandlers, pure, compose } from 'recompose';
import Color from '../constants/Color';

const enhancer = compose(
  withState('inputText', 'updateText', ''),
  withHandlers({
    onChangeText: ({ updateText }) => e => {
      updateText(e.target.value);
    },
    clearText: ({ updateText }) => () => {
      updateText('');
    },
  }),
  pure,
);

export default enhancer(
  ({ loginUser, inputText, onChangeText, closeLoginModal }) => (
    <React.Fragment>
      <Modal>
        <InputName type="text" value={inputText} onChange={onChangeText} />
        <Button
          onClick={() => {
            loginUser(inputText);
            closeLoginModal();
          }}
        >
          Login
        </Button>
      </Modal>
      <Overlay onClick={closeLoginModal} />
    </React.Fragment>
  ),
);

const Modal = styled.div`
  width: 50%;
  height: 70%;
  margin: 1.5em auto 0;
  padding: 10px 20px;
  border: 2px solid #aaa;
  background: #fff;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
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
const InputName = styled.input`
  height: 40px;
  width: 70%;
  margin-right: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9em;
  padding: 0 10px;
  border: 1px solid ${Color.gray20};
  &:focus {
    outline: 2px ${Color.skyblue} solid;
  }
`;
const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 40px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: palevioletred;
    color: white;
    transition: 0.3s;
  }
`;
