/**
 * Created by alextulenko on 11/10/16.
 */
import { combineReducers } from 'redux/lib';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authentication.js';
import SignUpReducer from './signUpReducer';

const rootReducer = combineReducers({
    AuthReducer,
    SignUpReducer,
    form: FormReducer
})

export default rootReducer