import React from 'react';
import Normalize from 'react-normalize';

import CardItem from './components/CardItem';
import CardList from './components/CardList';
import Header from './components/Header';
import Home from './components/Home';

const deliveryData = [
  {
    name: '맥북 케이스',
    carrier: 'kr.cjlogistics',
    track: 626295097001,
  },
];

function App() {
  return (
    <>
      <Normalize />
      <Home>
        <Header />
        <CardList>
          {deliveryData.map((delivery, idx) => <CardItem delivery={delivery} key={`delivery-${idx + 1}`} />)}
        </CardList>
      </Home>
    </>
  );
}

export default App;
