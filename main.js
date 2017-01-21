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
import Home from './src/components/Home';
import Footer from './src/containers/Footer';
import EditUserPage from './src/containers/EditUserPage';
import EditEmailPage from './src/containers/EditEmailPage';
import EditPasswordPage from './src/containers/EditPasswordPage';
import EditAvailableDatesPage from './src/containers/EditAvailableDatesPage';
import NavBar from './src/containers/NavBar';
import Blog from './src/containers/Blog';

const store = createStore( rootReducer, applyMiddleware( reduxThunk ));
store.dispatch(Actions.verifyAuth());
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MarketView} />
                <Route path="/login" component={Home}/>
                <Route path="/cart" component={RequireAuth(Cart)}/>
                <Route path="/account" component={RequireAuth(AccountPage)}/>
                <Route path="/addItem" component={RequireAuth(AddItemPage)}/>
                <Route path="/edit" component={RequireAuth(EditUserPage)}/>
                <Route path="/email" component={RequireAuth(EditEmailPage)}/>
                <Route path="/password" component={RequireAuth(EditPasswordPage)}/>
                <Route path="/available" component={RequireAuth(EditAvailableDatesPage)}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/terms" component={TermsOfUse}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/blog" component={Blog}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);