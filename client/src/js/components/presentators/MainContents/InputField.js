import React from 'react';
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import Color from '../constants/Color';

export default () => {
  return (
    <Container>
      <InputField />
      <Button>送信</Button>
    </Container>
  )
}

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 100%;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;
const Container = styled.div`
  box-sizing: border-box;
  height: 14%;
  border: 1px solid ${Color.gray20};
  padding: 20px 20px;
`
const InputField = styled.input`
  height: 100%;
  width: 70%;
  margin-right: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9em;
  padding: 0 10px;
  &:focus {
    outline: 2px ${Color.skyblue} solid;
  }
`