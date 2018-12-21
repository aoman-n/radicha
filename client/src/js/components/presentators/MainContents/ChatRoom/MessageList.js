import React from 'react';
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import Color from '../../constants/Color';

export default ({ message }) => {
  const { messages } = message;
  return (
    <Container>
      {messages.map((msg, i) => (
        <List key={i}>
          <Name>{msg.name}: </Name>
          <Text>{msg.text}</Text>
        </List>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  flex: 1;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow: scroll;
`
const List = styled.li`
  padding-bottom: 10px;
`
const Name = styled.span`
  color: ${Color.darkblue};
`
const Text = styled.span`
  color: ${Color.gray30};
  font-size: 0.9em;
`