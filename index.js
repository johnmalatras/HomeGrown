/**
 * Created by alextulenko on 10/31/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App.jsx';
//import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
//import RequireAuth from './containers/RequireAuth.jsx';
//import Signup from './containers/SignUp.jsx';
//import Login from './containers/Login.jsx';
import LoginPage from './containers/LoginPage.jsx';

const store = configureStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home} />
//                 <Route path="signup" component={Signup} />
//                 <Route path="login" component={Login} />
//             </Route>
//         </Router>
//     </Provider>,
//     document.getElementById('app')
// );
ReactDOM.render(<LoginPage/>, document.getElementById('app'));