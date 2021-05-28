import React from 'react';
import styled from 'styled-components';
interface IHomeProps {
  children: React.ReactNode;
}

export default function Home({ children }: IHomeProps) {
  return (
    <Wrap>
      <Container>
        {children}
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Container = styled.div`
  flex-direction: column;
  width: 80%;

  @media (max-width: 670px) {
    width: 90%;
  }
`;
