import React from 'react';
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import Color from '../../constants/Color';

export default ({sendMessage, onChangeText, inputText, clearText}) => {
  return (
    <Container onSubmit={e => {
      e.preventDefault();
      sendMessage(inputText);
      clearText();
    }}>
      <InputField type="text" value={inputText} onChange={onChangeText} />
      <Button type="submit">送信</Button>
    </Container>
  )
}

const Container = styled.form`
  box-sizing: border-box;
  height: 14%;
  border: 1px solid ${Color.gray10};
  border-top: none;
  padding: 20px 20px;
`
const InputField = styled.input`
  height: 40px;
  width: 70%;
  margin-right: 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9em;
  padding: 0 10px;
  border: 1px solid ${Color.gray20};
  border-radius: 3px;
  &:focus {
    outline: 2px ${Color.skyblue} solid;
    border-radius: 3px;
  }
`
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