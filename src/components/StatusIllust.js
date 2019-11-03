import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

const illustData = [
  {
    id: 'information_received',
    name: 'box',
    text: '상품준비중',
    color: true,
  },
  {
    id: 'at_pickup',
    name: 'trolley',
    text: '상품인수',
    color: true,
  },
  {
    id: 'in_transit',
    name: 'truck',
    text: '상품이동중',
    color: true,
  },
  {
    id: 'out_for_delivery',
    name: 'scooter',
    text: '배송출발',
  },
  {
    id: 'delivered',
    name: 'package',
    text: '배달완료',
  },
];

const illustDefaultCtx = require.context('../assets/illusts/defaults', true);
const illustColorCtx = require.context('../assets/illusts/colors', true);

export default function StatusIllust({ stateID }) {
  const Wrap = useConstant(() => styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `);
  const Container = useConstant(() => styled.div`
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `);
  function Illust({ illust }) {
    const { color } = illust;
    const IllustWrap = useConstant(() => styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 6rem;

      img {
        height: 4rem;
      }

      &:nth-child(2) img {
        height: 3.7rem;
      }

      &:nth-child(3) img {
        height: 4.5rem;
      }

      &:nth-child(4) img {
        height: 3.9rem;
      }

      &:nth-child(5) img {
        height: 3.9rem;
      }
    `);
    const Image = useConstant(() => styled.img`
      width: auto;
    `);
    const Text = useConstant(() => styled.span`
      margin-top: 0.5rem;
      font-size: 0.9rem;
      font-weight: 700;
      color: ${stateID === illust.id ? 'rgb(212, 5, 17)' : 'rgba(0, 0, 0, 0.9)'};
    `);
    const IllustCtx = (color) ? illustColorCtx : illustDefaultCtx;
    const IllustImg = IllustCtx(`./${illust.name}.svg`);

    return (
      <IllustWrap>
        <Image src={IllustImg} />
        <Text>{illust.text}</Text>
      </IllustWrap>
    );
  }
  return (
    <Wrap>
      <Container>
        {illustData.map((illust, idx) => <Illust illust={illust} key={`illust-${idx + 1}`} />)}
      </Container>
    </Wrap>
  );
}
