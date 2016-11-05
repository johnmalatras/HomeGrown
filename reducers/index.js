/**
 * Created by alextulenko on 10/28/16.
 */
import {combineReducers} from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth.jsx';


const rootReducer = combineReducers({
    auth: AuthReducer,
    form: FormReducer
});
//dogs
export default rootReducer;