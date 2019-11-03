import React, { Component } from 'react';
import styled from 'styled-components';

import Timeline from './Timeline';
import StatusIllust from './StatusIllust';

const imageContext = require.context('../assets/carriers/', true);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 5px 5px 35px -10px rgba(36, 36, 48, 0.15);
  border-radius: 8px;
  padding: 1.5rem 1.8rem;
  position: relative;
`;
const Image = styled.img`
  height: 2.5rem;
  width: auto;
  margin-right: 1.5rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* width: -webkit-fill-available; */
  width: fit-content;
`;
const InfoWrap = styled.div`
  display: flex;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 1rem; */
  margin-bottom: 0.5rem;
`;
const Name = styled.span`
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.2rem 0.25rem;
`;
const Track = styled.span`
  font-size: 1.2rem;
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
`;
const RightSection = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AbsoluteLabel = styled.div`
  position: absolute;
  top: 1rem;
  right: -1.5rem;
  transform: rotate(25deg);
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.4rem 1.5rem;
  background-color: rgb(212, 5, 17);
  color: white;
  box-shadow: 2px 13px 30px -10px rgba(41, 41, 41, 0.3);
`;

const exampleDeliveryData = {
  from: { name: '립*', time: '2019-11-02T08:14:23+09:00' },
  to: { name: '여*', time: null },
  state: { id: 'in_transit', text: '상품이동중' },
};

export default class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delivery: {
        state: { text: '' },
      },
    };
  }

  componentDidMount() {
    this.setState({
      delivery: exampleDeliveryData,
    });
  }

  render() {
    const { delivery: { name, carrier, track } } = this.props;
    const { delivery: { from, to, state } } = this.state;
    const carrierImg = imageContext(`./${carrier}.png`);
    return (
      <Container>
        <LeftSection>
          <InfoWrap>
            <Image src={carrierImg} />
            <Info>
              <Name>{name}</Name>
              <Track>{track}</Track>
            </Info>
          </InfoWrap>
          <Timeline from={from} to={to} />
        </LeftSection>
        <RightSection>
          <StatusIllust stateID={state.id} />
        </RightSection>
        <AbsoluteLabel>
          {state.text}
        </AbsoluteLabel>
      </Container>
    );
  }
}
