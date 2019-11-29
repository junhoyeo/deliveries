import React, { Component } from 'react';
import styled from 'styled-components';

import StatusIllust from './StatusIllust';
import Timeline from './Timeline';

import updateTrack from '../utils/updateTrack';

import TimesIcon from '../assets/icons/times-solid.png';
import { IStoredData } from '../reducers/updater.reducer';
import { ITrack } from '../utils/interfaces';

const imageContext = require.context('../assets/carriers/', true);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 5px 5px 35px -10px rgba(36, 36, 48, 0.15);
  border-radius: 8px;
  padding: 1.5rem 1.8rem;
  position: relative;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 1rem 0.8rem;
  }
`;
const ImageWrap = styled.div`
  height: auto;
  width: 5.7rem;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.8rem;
`;
const Image = styled.img`
  height: auto;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  display: flex;

  @media (max-width: 820px) {
    width: -webkit-fill-available;
  }
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
  background-color: ${({ stateID }: { stateID: string }) => (
    stateID === 'delivered' ? '#333' : 'rgb(212, 5, 17)'
  )};
  color: white;
  box-shadow: 2px 13px 30px -10px rgba(41, 41, 41, 0.3);

  @media (max-width: 400px) {
    top: 0.8rem;
    right: -1.8rem;
    transform: rotate(29deg);
    font-size: 1.1rem;
  }
`;
const AbsoluteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 0.3rem;
  background-color: #f1f3f5;
  border: 0.5px solid #dee2e6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e9ecef;
  }

  &:focus {
    border-color: #ced4da;
  }
`;
const Icon = styled.img`
  height: 0.6rem;
  width: 0.6rem;
`;

interface ICardProps {
  delivery: ITrack;
  timestamp?: number;
  storedData?: IStoredData;
  deleteTrack?: (trackID: string) => void;
  updateTimestamp?: () => void;
}

interface ICardState {
  delivery: ITrack;
}

export default class CardItem extends Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      delivery: {
        state: { id: '', text: '' },
        trackID: '',
      },
    };

    this.updateTrackData = this.updateTrackData.bind(this);
    this.onUpdateTrack = this.onUpdateTrack.bind(this);
    this.onClickDeleteTrack = this.onClickDeleteTrack.bind(this);
  }

  public componentDidMount() {
    this.onUpdateTrack();
  }

  public onUpdateTrack() {
    const {
      delivery: { trackID },
      timestamp,
      storedData,
    } = this.props;

    const prevTimestamp = new Date().getTime() - 3600000;
    if (timestamp < prevTimestamp) {
      // update
      this.updateTrackData();
    } else if (trackID in storedData) {
      this.setState({
        delivery: storedData[trackID],
      });
    } else this.updateTrackData(); // newly created track
  }

  public onClickDeleteTrack() {
    const {
      delivery: {
        trackID,
      },
      deleteTrack,
    } = this.props;
    deleteTrack(trackID);
  }

  public async updateTrackData() {
    const { delivery, updateTimestamp } = this.props;
    const { data } = await updateTrack(delivery, updateTimestamp);
    this.setState({
      delivery: data,
    });
  }

  public render() {
    const { delivery: { name, carrierID, trackID } } = this.props;
    const {
      delivery: {
        from,
        to,
        state,
        progresses,
      },
    } = this.state;
    const carrierImg = imageContext(`./${carrierID}.png`);
    return (
      <Container>
        <LeftSection>
          <InfoWrap>
            <ImageWrap>
              <Image src={carrierImg} />
            </ImageWrap>
            <Info>
              <Name>{name}</Name>
              <Track>{trackID}</Track>
            </Info>
          </InfoWrap>
          <Timeline from={from} to={to} />
        </LeftSection>
        <RightSection>
          <StatusIllust stateID={state.id} progresses={progresses} />
        </RightSection>
        <AbsoluteLabel stateID={state.id}>
          {state.text}
        </AbsoluteLabel>
        <AbsoluteButton onClick={this.onClickDeleteTrack}>
          <Icon src={TimesIcon} />
        </AbsoluteButton>
      </Container>
    );
  }
}
