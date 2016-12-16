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
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomePage from './src/components/HomePage';
import RequireAuth from './src/containers/RequireAuth';
import reduxThunk from 'redux-thunk';
import * as Actions from './src/actions/index';
import MarketView from './src/containers/MarketView.jsx';
import Cart from './src/containers/Cart';
import AccountPage from './src/containers/AccountPage';
import AddItemPage from './src/containers/AddItemPage';
import AboutPage from './src/components/AboutPage';
import TermsOfUse from './src/components/TermsOfUse';
import Footer from './src/containers/Footer';

const store = createStore( rootReducer, applyMiddleware( reduxThunk ));
store.dispatch(Actions.verifyAuth());
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MarketView} />
                <Route path="/homePage" component={HomePage}/>
                <Route path="/cart" component={RequireAuth(Cart)}/>
                <Route path="/account" component={RequireAuth(AccountPage)}/>
                <Route path="/addItem" component={RequireAuth(AddItemPage)}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/terms" component={TermsOfUse}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

//ReactDOM.render(<Footer/>, document.getElementById('footer'))


