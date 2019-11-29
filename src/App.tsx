import React, { Component } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import ReactGA from 'react-ga';
import Modal from 'react-modal';
import Normalize from 'react-normalize';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import CardButton from './components/CardButton';
import CardContainer from './components/CardContainer';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import updateTrack from './utils/updateTrack';

import dropdownOptions from './data/carriers.json';

import 'react-dropdown/style.css';
import './styles/Dropdown.scss';
import { ITrack } from './utils/interfaces';

ReactGA.initialize('UA-152536759-1');
ReactGA.pageview(window.location.pathname);

Modal.setAppElement('#root');

const ModalStyles: object = {
  content: {
    overflow: 'unset',
    position: 'unset',
    width: 'fit-content',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Field = styled.span`
  font-weight: 700;
  margin-right: 1.2rem;
`;
const Input = styled.input`
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  border: 2.5px solid rgba(0, 0, 0, 0.9);
  transition: border-color 0.3s ease-out;
  border-radius: 4px;
  min-width: 16rem;

  &:focus {
    border-color: #FFCC00;
  }
`;
const Button = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  padding: 0.5rem 0;
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: rgb(0, 0, 0);
  }
`;

interface IAddTrackProps {
  name: string;
  trackID: string;
  carrierID: string;
}

interface IAppProps {
  tracks: ITrack[];
  addTrack: (props: IAddTrackProps) => void;
  updateTimestamp: () => {};
}

interface IAppState {
  name: string;
  trackID: string;
  carrierID: string;
  isModalOpen: boolean;
}

const defaultState: IAppState = {
  carrierID: '',
  isModalOpen: false,
  name: '',
  trackID: '',
};

export default class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = defaultState;

    this.onClickAddTrack = this.onClickAddTrack.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  public async onClickAddTrack() {
    const { addTrack, updateTimestamp } = this.props;
    const { name, trackID, carrierID } = this.state;
    if (!name || !trackID || !carrierID) {
      Swal.fire('이런!', '모든 항목을 입력하셨나요?', 'error');
      return;
    }
    try {
      await updateTrack({ carrierID, name, trackID } as ITrack, updateTimestamp);
      addTrack({
        carrierID,
        name,
        trackID,
      });
      this.closeModal();
    } catch (error) {
      const { response: { data: { message } } } = error;
      Swal.fire('이런!', message, 'error');
    }
  }

  public openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  public closeModal() {
    this.setState(defaultState);
  }

  public handleChange(event: React.SyntheticEvent) {
    event.persist();
    const { value, name }: { value: string, name: string } = event.target as HTMLInputElement;

    this.setState({
      [name]: value,
    } as any);
  }

  public handleDropdownChange(selected: Option) {
    this.setState({
      carrierID: selected.value,
    });
  }

  public render() {
    const { tracks } = this.props;
    const {
      isModalOpen,
      name,
      trackID,
      carrierID,
    } = this.state;

    return (
      <>
        <Normalize />
        <Home>
          <Header />
          <CardList>
            {tracks.map((delivery: ITrack, idx: number) =>
              <CardContainer delivery={delivery} key={`delivery-${idx + 1}`} />)}
            <CardButton onClick={this.openModal} />
          </CardList>
          <Footer />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyles}
          >
            <Container>
              <Row>
                <Field>물건 이름</Field>
                <Input
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="구매한 물건 이름이나 요약"
                />
              </Row>
              <Row>
                <Field>운송장 번호</Field>
                <Input
                  name="trackID"
                  value={trackID}
                  onChange={this.handleChange}
                  placeholder="숫자로만 이루어져 있어요"
                  type="number"
                />
              </Row>
              <Row>
                <Field>택배사 이름</Field>
                {/*
                // @ts-ignore */}
                <Dropdown name="carrierID"
                  value={carrierID}
                  onChange={this.handleDropdownChange}
                  placeholder="어떤 회사에서 배송하고 있나요?"
                  options={dropdownOptions}
                />
              </Row>
              <Button onClick={this.onClickAddTrack}>추가하기</Button>
            </Container>
          </Modal>
        </Home>
      </>
    );
  }
}
