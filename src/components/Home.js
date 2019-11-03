import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function Home({ children }) {
  const Wrap = useConstant(() => styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(255, 204, 0);
    height: 100%;
  `);
  const Container = useConstant(() => styled.div`
    flex-direction: column;
    width: 80%;
  `);

  return (
    <Wrap>
      <Container>
        {children}
      </Container>
    </Wrap>
  );
}
