/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../constants/Color';

export default ({ createRoom, hideModal }) => {
  const [text, setText] = useState('');
  return (
    <Wrapper>
      <InputName
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          createRoom(text);
          hideModal('create');
        }}
      >
        Create!!!
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
