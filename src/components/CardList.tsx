import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

interface ICardListProps {
  children: React.ReactNode;
}

export default function CardList({ children }: ICardListProps) {
  const Container = useConstant(() => styled.div``);

  return (
    <Container>
      {children}
    </Container>
  );
}
