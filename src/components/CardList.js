import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function CardList({ children }) {
  const Container = useConstant(() => styled.div``);
  function Button() {
    const ButtonContainer = useConstant(() => styled.button`
      cursor: pointer;
      height: 8rem;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      border: 5px dashed rgba(255, 255, 255, 0.8);
      border-radius: 12px;
      margin-bottom: 1rem;
      transition: background-color 0.5s linear;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }

      &:focus {
        outline: 0;
      }
    `);
    const Text = useConstant(() => styled.span`
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
      font-weight: 700;
    `);

    return (
      <ButtonContainer>
        <Text>새로운 택배 추가하기</Text>
      </ButtonContainer>
    );
  }

  return (
    <Container>
      {children}
      <Button />
    </Container>
  );
}
