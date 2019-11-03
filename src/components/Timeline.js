import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

import ArrowIcon from '../assets/icons/long-arrow-alt-right-solid.svg';

const Item = ({ data: { name = '', time = '' }, type }) => {
  const Container = useConstant(() => styled.div`
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      margin-left: 1rem;
    }
  `);
  const Row = useConstant(() => styled.div`
    display: flex;

    &:last-child {
      font-size: 0.85rem;
    }
  `);
  const Field = useConstant(() => styled.span`
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-right: 0.3rem;
    text-transform: capitalize;
  `);
  const Name = useConstant(() => styled.span`
    font-weight: 500;
    margin-right: 0.2rem;
  `);
  const Time = useConstant(() => styled.span`
    font-weight: 300;
  `);
  return (
    <Container>
      <Row>
        <Field>{type}</Field>
        <Name>{name}</Name>
      </Row>
      <Row>
        <Field>{{ from: '출발', to: '도착' }[type]}</Field>
        <Time>{time || '정보 없음'}</Time>
      </Row>
    </Container>
  );
};

export default function Timeline({ from = {}, to = {} }) {
  const Container = useConstant(() => styled.div`
    display: flex;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.9);
    padding: 0.5rem 0.8rem;
    width: fit-content;
  `);

  const Icon = useConstant(() => styled.img`
    height: 1.2rem;
    width: auto;
  `);

  return (
    <Container>
      <Item data={from} type="from" />
      <Icon src={ArrowIcon} />
      <Item data={to} type="to" />
    </Container>
  );
}
