import { OPEN_FP_MODAL, CLOSE_FP_MODAL, FORGOT_PASSWORD } from '../actions';

const initialState =  {
  fpModalIsOpen: false
};

export default function forgotpassword(state = initialState, action) {
  switch(action.type) {
    case OPEN_FP_MODAL:
      return Object.assign({}, state, {
        fpModalIsOpen: true
      });
    case CLOSE_FP_MODAL:
      return Object.assign({}, state, {
        fpModalIsOpen: false
      });
    case FORGOT_PASSWORD:
      return Object.assign({}, state, {
        fpModalIsOpen: false
      });
    default:
      return state;
  }
}