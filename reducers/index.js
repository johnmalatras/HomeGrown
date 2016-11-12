/**
 * Created by alextulenko on 10/28/16.
 */
import {combineReducers} from 'redux';
import AuthReducer from './auth.jsx';
import ItemReducer from './items';



const rootReducer = combineReducers({
    auth: AuthReducer,
    //form: FormReducer,
    items: ItemReducer
});

export default rootReducer;