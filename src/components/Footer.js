import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

export default function Footer() {
  const Container = useConstant(() => styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  `);
  const Text = useConstant(() => styled.span`
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.7rem;
    font-weight: 700;

    a {
      cursor: pointer;
      color: rgba(212, 5, 17, 0.8);
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.8);
      font-style: italic;
      font-size: 0.6rem;
      font-weight: 500;
      margin-top: 3px;
      text-align: center;
    }
  `);

  return (
    <Container>
      <Text>
        Developed by&nbsp;
        <a
          href="https://github.com/junhoyeo"
          target="_blank"
          rel="noopener noreferrer"
        >
          @junhoyeo
        </a>
      </Text>
      <Text>
        API powered by&nbsp;
        <a href="https://tracker.delivery/guide" title="delivery-tracker">Delivery Tracker</a>
        <br />
        Icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </Text>
    </Container>
  );
}
