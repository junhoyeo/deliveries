import moment from 'moment';
import 'moment/locale/ko';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import windowSize from 'react-window-size';
import styled from 'styled-components';

import ArrowIcon from '../assets/icons/long-arrow-alt-right-solid.svg';

interface IItem {
  data: {
    name: string;
    time: string;
  };
  width: number;
  type: string;
}

const Item = ({ data: { name = '', time = '' }, width, type }: IItem) => {
  const currentTime = moment(time);
  const timeFormat = ((w) => {
    if (w > 1100 || (w < 820 && w >= 550)) return 'YYYY.MM.DD, a h:mm';
    return 'YYYY.MM.DD';
  })(width);

  return (
    <ItemContainer data-tip={currentTime.format('YYYY년 MM월 DD일, HH시 mm분')}>
      <Row>
        <Field>{type}</Field>
        <Name>{name}</Name>
      </Row>
      <Row>
        <Field>{['출발', '도착'][Number(type === 'to')]}</Field>
        <Time>
          {(time) ? currentTime.format(timeFormat) : '정보 없음'}
        </Time>
      </Row>
    </ItemContainer>
  );
};
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  cursor: help;
  margin-left: 0.8rem;

  &:first-child {
    margin-left: 0;
    margin-right: 0.8rem;
  }
`;
const Row = styled.div`
  display: flex;

  &:last-child {
    font-size: 0.85rem;

    @media (max-width: 1200px) {
      font-size: 0.9rem;
    }
  }
`;
const Field = styled.span`
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  margin-right: 0.3rem;
  text-transform: capitalize;
`;
const Name = styled.span`
  font-weight: 500;
  margin-right: 0.2rem;
`;
const Time = styled.span`
  font-weight: 300;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Timeline = React.forwardRef(({ windowWidth: width, from = {}, to = {} }: any, _) => {
  return (
    <TimeLineContainer>
      <Item data={from} type="from" width={width} />
      <Icon src={ArrowIcon} />
      <Item data={to} type="to" width={width} />
      <ReactTooltip multiline />
    </TimeLineContainer>
  );
});
export default windowSize(Timeline);
const TimeLineContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.9);
  padding: 0.5rem 0.8rem;
  width: 85%;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 85%;
  }

  @media (max-width: 960px) {
    width: 50%;
    margin-bottom: auto;
  }

  @media (max-width: 820px) {
    width: -webkit-fill-available;
  }
`;
const Icon = styled.img`
  height: 1.2rem;
  width: auto;
`;
