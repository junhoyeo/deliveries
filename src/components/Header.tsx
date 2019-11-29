import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function Header() {
  const Container = useConstant(() => styled.header`
    padding: 1.2rem 0rem;
  `);
  const Title = useConstant(() => styled.h1`
    color: rgb(212, 5, 17);
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  `);
  const Description = useConstant(() => styled.p`
    color: rgb(212, 5, 17);
    font-size: 1.1rem;
    font-weight: 400;
  `);
  return (
    <Container>
      <Title>당신의 모든 배송</Title>
      <Description>시킨 물건이 어디쯤 왔는지 한꺼번에 확인해 보세요.</Description>
    </Container>
  );
}
