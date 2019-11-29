import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function Home({ children }) {
  const Wrap = useConstant(() => styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
  `);
  const Container = useConstant(() => styled.div`
    flex-direction: column;
    width: 80%;

    @media (max-width: 670px) {
      width: 90%;
    }
  `);

  return (
    <Wrap>
      <Container>
        {children}
      </Container>
    </Wrap>
  );
}
