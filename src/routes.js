/**
 * Created by alextulenko on 2/9/17.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './containers/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomePage from './components/HomePage';
import RequireAuth from './containers/RequireAuth';
import MarketView from './containers/MarketView.jsx';
import Cart from './containers/Cart';
import AccountPage from './containers/AccountPage';
import AddItemPage from './containers/AddItemPage';
import AboutPage from './components/AboutPage';
import Home from './components/Home';
import EditUserPage from './containers/EditUserPage';
import EditEmailPage from './containers/EditEmailPage';
import EditPasswordPage from './containers/EditPasswordPage';
import EditAvailableDatesPage from './containers/EditAvailableDatesPage';
import Blog from './containers/Blog';
export default
(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MarketView}/>
                <Route path="/home" component={Home}/>
                <Route path="/cart" component={RequireAuth(Cart)}/>
                <Route path="/account" component={RequireAuth(AccountPage)}/>
                <Route path="/addItem" component={RequireAuth(AddItemPage)}/>
                <Route path="/edit" component={RequireAuth(EditUserPage)}/>
                <Route path="/email" component={RequireAuth(EditEmailPage)}/>
                <Route path="/password" component={RequireAuth(EditPasswordPage)}/>
                <Route path="/available" component={RequireAuth(EditAvailableDatesPage)}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/login" component={HomePage}/>
                <Route path="/blog" component={Blog}/>
            </Route>
        </Router>
    </Provider>
)