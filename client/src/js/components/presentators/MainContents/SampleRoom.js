/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';

export default ({ sendMessage, onChangeText, inputText, clearText, message }) => {
  const { messages } = message;
  return (
    <Container>
      <MsgList>
        {messages.map((msg, i) => (
          <Msg key={i}>{msg.name}: {msg.text}</Msg>
        ))}
      </MsgList>
      <Form onSubmit={e => {
        e.preventDefault();
        console.log(inputText);
        sendMessage(inputText);
        clearText();
      }}>
        <Input type="text" value={inputText} onChange={onChangeText} />
        <Button type="submit">送信</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`
const MsgList = styled.ul`

`
const Msg = styled.li`

`
const Form = styled.form`
`
const Input = styled.input`
`
const Button = styled.button`

`