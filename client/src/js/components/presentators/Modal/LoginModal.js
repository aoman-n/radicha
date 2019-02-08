/** @jsx jsx */
import { jsx } from '@emotion/core';
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

export default enhancer(({ loginUser, inputText, onChangeText, hideModal }) => (
  <Wrapper>
    <InputName type="text" value={inputText} onChange={onChangeText} />
    <Button
      onClick={() => {
        loginUser(inputText);
        hideModal('login');
      }}
    >
      Login
    </Button>
  </Wrapper>
));

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
