import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/Index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import configureStore from './store';

const { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
