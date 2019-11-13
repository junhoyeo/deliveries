import React from 'react';
import styled from 'styled-components';
import windowSize from 'react-window-size';
import moment from 'moment';
import 'moment/locale/ko';

import useConstant from '../utils/useConstant';

import ArrowIcon from '../assets/icons/long-arrow-alt-right-solid.svg';

const Item = ({ data: { name = '', time = '' }, width, type }) => {
  const Container = useConstant(() => styled.div`
    display: flex;
    flex-direction: column;
    width: 43%;

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

      @media (max-width: 1200px) {
        font-size: 0.9rem;
      }
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
  const timeFormat = ((w) => {
    if (w > 1100 || (w < 820 && w >= 550)) return 'YYYY.MM.DD, a h:mm';
    return 'YYYY.MM.DD';
  })(width);

  return (
    <Container>
      <Row>
        <Field>{type}</Field>
        <Name>{name}</Name>
      </Row>
      <Row>
        <Field>{{ from: '출발', to: '도착' }[type]}</Field>
        <Time>{(time) ? moment(time).format(timeFormat) : '정보 없음'}</Time>
      </Row>
    </Container>
  );
};

// eslint-disable-next-line no-unused-vars
const Timeline = React.forwardRef(({ windowWidth: width, from = {}, to = {} }, ref) => {
  const Container = useConstant(() => styled.div`
    display: flex;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.9);
    padding: 0.5rem 0.8rem;
    width: ${(width < 1100) ? 'fit-content' : '85%'};

    @media (max-width: 960px) {
      margin-bottom: auto;
    }

    @media (max-width: 820px) {
      width: -webkit-fill-available;
    }
  `);

  const Icon = useConstant(() => styled.img`
    height: 1.2rem;
    width: auto;
  `);

  return (
    <Container>
      <Item data={from} type="from" width={width} />
      <Icon src={ArrowIcon} />
      <Item data={to} type="to" width={width} />
    </Container>
  );
});

export default windowSize(Timeline);
