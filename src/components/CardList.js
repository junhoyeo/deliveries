import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function CardList({ children }) {
  const Container = useConstant(() => styled.div``);

  return (
    <Container>
      {children}
    </Container>
  );
}
