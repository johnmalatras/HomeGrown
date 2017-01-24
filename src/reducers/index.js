/**
 * Created by alextulenko on 11/10/16.
 */


import { combineReducers } from 'redux/lib';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authentication.js';
import SignUpReducer from './signUpReducer';
import ItemsReducer from './items';
import ModalReducer from './modal';
import CartReducer from './cart';
import ActiveOrderReducer from './activeorders';
import ActiveOrderModalReducer from './aomodal';
import CurrentListingReducer from './currentlistings';
import CurrentListingModalReducer from './clmodal';
import AccountReducer from './account';
import ForgotPasswordReducer from './forgotpassword';
import LoginReducer from './loginreducer';

const rootReducer = combineReducers({
    AuthReducer,
    SignUpReducer,
    form: FormReducer,
    items: ItemsReducer,
  	modal: ModalReducer,
  	cart: CartReducer,
    activeOrders: ActiveOrderReducer,
    activeOrderModal: ActiveOrderModalReducer,
    currentListings: CurrentListingReducer,
    currentListingModal: CurrentListingModalReducer,
    AccountReducer: AccountReducer,
    forgotpassword: ForgotPasswordReducer,
    loginReducer: LoginReducer
})
export default rootReducer;