import React from 'react';
import ReactDOM from 'react-dom';
import Market from './containers/market.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Market />
  </Provider>,
  document.getElementById('app')
);