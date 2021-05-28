import React from 'react';
import styled from 'styled-components';

interface ICardListProps {
  children: React.ReactNode;
}

export default function CardList({ children }: ICardListProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div``;
