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
//import store from './src/store/configureStore';


const store = createStore( rootReducer, applyMiddleware( promiseMiddleware ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home} />
//                 <Route path="market" component={Market} />
//             </Route>
//         </Router>
//     </Provider>,
//     document.getElementById('app')
// );