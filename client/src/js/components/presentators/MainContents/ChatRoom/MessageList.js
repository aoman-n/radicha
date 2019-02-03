import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';

const MessageList = ({ messages }) => (
  <Container>
    {messages.map((message, i) => (
      <Message key={i}>
        <Head>{message.user}</Head>
        <Text>{message.text}</Text>
      </Message>
    ))}
  </Container>
);

const Container = styled.ul`
  height: 92%;
  overflow: auto;
`;
const Message = styled.li`
  padding: 1.4rem 2rem;
  color: ${Color.gray};
  &:nth-child(even) {
    background: ${Color.base2};
  }
`;
const Head = styled.p`
  font-size: 0.9rem;
  padding-bottom: 0.8rem;
  color: ${Color.main2};
  font-weight: bold;
`;
const Text = styled.p`
  font-size: 0.8rem;
`;

export default MessageList;
