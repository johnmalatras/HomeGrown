/**
 * Created by alextulenko on 11/11/16.
 */
import { createStore, compose, applyMiddleware } from 'redux/lib';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers/index';


const initialState =  {
    authenticated: false
};

const store = createStore(initialState)(
    rootReducer,
    initialState,
    applyMiddleware(
        promiseMiddleware
    )
);

export default store;