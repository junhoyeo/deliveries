import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

import trackData from '../data/tracks.json';

const illustDefaultCtx = require.context('../assets/illusts/defaults', true);
const illustColorCtx = require.context('../assets/illusts/colors', true);
const trackStates = trackData.map((track) => track.id);

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
  function Illust({ track }) {
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
      color: ${stateID === track.id ? 'rgb(212, 5, 17)' : 'rgba(0, 0, 0, 0.9)'};
    `);
    const IllustCtx = (trackStates.indexOf(stateID) >= trackStates.indexOf(track.id))
      ? illustColorCtx : illustDefaultCtx;
    const IllustImg = IllustCtx(`./${track.illust}.svg`);

    return (
      <IllustWrap>
        <Image src={IllustImg} />
        <Text>{track.text}</Text>
      </IllustWrap>
    );
  }
  return (
    <Wrap>
      <Container>
        {trackData.map((track, idx) => <Illust track={track} key={`illust-${idx + 1}`} />)}
      </Container>
    </Wrap>
  );
}
