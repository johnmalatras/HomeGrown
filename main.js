/**
 * Created by John on 10/22/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import RequireAuth from './containers/RequireAuth.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Market from './components/market.jsx';
import Home from './containers/Home.jsx';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="market" component={RequireAuth(Market)} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);