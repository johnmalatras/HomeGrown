/**
 * Created by John on 10/22/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import MarketView from './containers/MarketView.jsx';
import { createStore,applyMiddleware } from 'redux/lib';
import rootReducer from './src/reducers/index';
import promiseMiddleware from 'redux-promise';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MarketView />
  </Provider>,
  document.getElementById('app')
);