/**
 * Created by John on 10/22/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MarketView from './src/containers/MarketView.jsx';
import { createStore,applyMiddleware } from 'redux/lib';
import rootReducer from './src/reducers/index';
import promiseMiddleware from 'redux-promise';
import configureStore from './src/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MarketView />
  </Provider>,
  document.getElementById('app')
);