import React, { Component } from 'react';
import styled from 'styled-components';
import Normalize from 'react-normalize';
import Modal from 'react-modal';
import Dropdown from 'react-dropdown';

import CardButton from './components/CardButton';
import CardContainer from './components/CardContainer';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import dropdownOptions from './data/carriers.json';
import 'react-dropdown/style.css';
import './styles/Dropdown.scss';

Modal.setAppElement('#root');

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 'fit-content',
    position: 'unset',
    overflow: 'unset',
  },
};

const defaultState = {
  isModalOpen: false,
  name: '',
  carrierID: '',
  trackID: '',
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.onClickAddTrack = this.onClickAddTrack.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  onClickAddTrack() {
    const { addTrack } = this.props;
    const { name, trackID, carrierID } = this.state;
    if (!name || !trackID || !carrierID) return;
    addTrack({
      name,
      trackID,
      carrierID,
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState(defaultState);
  }

  handleChange(event) {
    event.persist();
    const { target: { value, name } } = event;

    this.setState({
      [name]: value,
    });
  }

  handleDropdownChange(selected) {
    this.setState({
      carrierID: selected.value,
    });
  }

  render() {
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
            {tracks.map((delivery, idx) => <CardContainer delivery={delivery} key={`delivery-${idx + 1}`} />)}
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
                />
              </Row>
              <Row>
                <Field>택배사 이름</Field>
                <Dropdown
                  name="carrierID"
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
