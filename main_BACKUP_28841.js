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
<<<<<<< HEAD
import configureStore from './src/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MarketView />
  </Provider>,
  document.getElementById('app')
);
=======
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Holder from './src/components/Holder'
import HomePage from './src/components/HomePage';
import RequireAuth from './src/containers/RequireAuth';
import reduxThunk from 'redux-thunk';
import * as Actions from './src/actions/index';

const store = createStore( rootReducer, applyMiddleware( reduxThunk ));
store.dispatch(Actions.verifyAuth());

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={RequireAuth(Holder)} />
                <Route path="/homePage" component={HomePage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
>>>>>>> master
