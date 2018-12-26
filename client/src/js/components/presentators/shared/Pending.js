/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (
  <Container>
    <CircularProgress size={60} color="primary" style={{ color: '#A5DF00' }} />
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
