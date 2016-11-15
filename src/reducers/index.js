</**
 * Created by alextulenko on 11/10/16.
 */
import { combineReducers } from 'redux/lib';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authentication.js';
import SignUpReducer from './signUpReducer';
import ItemsReducer from './items';
import ModalReducer from './modal';
import CartReducer from './cart';

const rootReducer = combineReducers({
    AuthReducer,
    SignUpReducer,
    form: FormReducer,
    items: ItemsReducer,
  	modal: ModalReducer,
  	cart: CartReducer
})

export default rootReducer;