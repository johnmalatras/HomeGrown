/**
 * Created by John on 10/22/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import { createStore,applyMiddleware } from 'redux/lib'
import rootReducer from './src/reducers/index';
import promiseMiddleware from 'redux-promise';
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
            <Route path="/" component={HomePage}/>
            <Route path="/holder" component={RequireAuth(Holder)}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
