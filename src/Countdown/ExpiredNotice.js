import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1px solid #ebebeb;
  border-radius: 0.25rem;
  margin: 0.5rem;
`;

const Text = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: red;
`

const ExpiredNotice = () => {
  return (
    <Container>
      <Text>Esta sucediendo!!!</Text>
    </Container>
  );
};

export default ExpiredNotice;