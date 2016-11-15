import { combineReducers } from 'redux';
import ItemsReducer from './items';
import ModalReducer from './modal';
import CartReducer from './cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  modal: ModalReducer,
  cart: CartReducer
});

export default rootReducer;