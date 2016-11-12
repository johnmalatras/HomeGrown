/**
 * Created by alextulenko on 11/10/16.
 */
import { combineReducers } from 'redux/lib';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authentication.js';

const rootReducer = combineReducers({
    AuthReducer,
    FormReducer
})

export default rootReducer