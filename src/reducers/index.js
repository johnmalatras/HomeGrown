<<<<<<< HEAD
import { combineReducers } from 'redux';
import ItemsReducer from './items';
import ModalReducer from './modal';
import CartReducer from './cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  modal: ModalReducer,
  cart: CartReducer
});
=======
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
>>>>>>> master

export default rootReducer;