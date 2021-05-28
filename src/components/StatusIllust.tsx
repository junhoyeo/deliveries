import moment from 'moment';
import 'moment/locale/ko';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { IProgress, IStatus } from '../utils/interfaces';
import useConstant from '../utils/useConstant';

import trackData from '../data/tracks.json';

const illustDefaultCtx = require.context('../assets/illusts/defaults', true);
const illustColorCtx = require.context('../assets/illusts/colors', true);
const trackStates = trackData.map((track) => track.id);

function getProgressTootip(stateID: string, progresses: IProgress[]) {
  try {
    const { description, time } = progresses.reverse().find((p) => p.status.id === stateID);
    return `${description}<br />${moment(time).format('YYYY년 MM월 DD일, HH시 mm분')}`;
  } catch (_) {
    return '데이터가 없습니다.';
  }
}

interface IStatusIllust {
  stateID: string;
  progresses: IProgress[];
}

export default function StatusIllust({ stateID, progresses }: IStatusIllust) {
  const Wrap = useConstant(() => styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `);
  const Container = useConstant(() => styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
      width: 90%;
    }

    @media (max-width: 1080px) {
      width: 95%;
    }

    @media (max-width: 1010px) {
      width: 100%;
    }
  `);
  function Illust({ status }: { status: IStatus }) {
    const IllustWrap = useConstant(() => styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      cursor: help;

      img {
        height: 4rem;
      }

      &:nth-child(2) img {
        height: 3.9rem;
      }

      &:nth-child(3) img {
        height: 4.5rem;
      }

      &:nth-child(4) img,
      &:nth-child(5) img {
        height: 4rem;
      }

      @media (max-width: 960px) {
        height: 6.2rem;
      }

      @media (max-width: 670px) {
        height: 5rem;

        img {
          height: 3.2rem;
        }

        &:nth-child(2) img {
          height: 3.3rem;
        }

        &:nth-child(3) img {
          height: 3.7rem;
        }

        &:nth-child(4) img {
          height: 3.4rem;
        }

        &:nth-child(5) img {
          height: 3.1rem;
        }
      }

      @media (max-width: 560px) {
        height: 4.5rem;

        img {
          height: 2.9rem;
        }

        &:nth-child(2) img {
          height: 2.9rem;
        }

        &:nth-child(3) img {
          height: 3.4rem;
        }

        &:nth-child(4) img {
          height: 3.1rem;
        }

        &:nth-child(5) img {
          height: 2.9rem;
        }
      }
    `);
    const Image = useConstant(() => styled.img`
      width: auto;
    `);
    const Text = useConstant(() => styled.span`
      margin-top: 0.5rem;
      font-size: 0.9rem;
      font-weight: 700;
      color: ${stateID === status.id ? 'rgb(212, 5, 17)' : 'rgba(0, 0, 0, 0.9)'};

      @media (max-width: 960px) {
        font-size: 1rem;
      }

      @media (max-width: 670px) {
        margin-top: 0;
        font-size: 0.88rem;
      }

      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
    `);
    const IllustCtx = (trackStates.indexOf(stateID) >= trackStates.indexOf(status.id))
      ? illustColorCtx : illustDefaultCtx;
    const IllustImg = IllustCtx(`./${status.illust}.svg`);

    return (
      <IllustWrap data-tip={getProgressTootip(status.id, progresses)}>
        <Image src={IllustImg} />
        <Text>{status.text}</Text>
        <ReactTooltip multiline />
      </IllustWrap>
    );
  }
  return (
    <Wrap>
      <Container>
        {trackData.map((track, idx) => <Illust status={track} key={`illust-${idx + 1}`} />)}
      </Container>
    </Wrap>
  );
}
