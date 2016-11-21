import { OPEN_CL_MODAL, CLOSE_CL_MODAL } from '../actions';

const initialState =  {
  clSelectedItem: null,
  clModalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_CL_MODAL:
      return Object.assign({}, state, {
        clModalIsOpen: true,
        clSelectedItem: action.item.selectedItem
      });
    case CLOSE_CL_MODAL:
      return Object.assign({}, state, {
        clModalIsOpen: false,
        clSelectedItem: null
      });
    default:
      return state;
  }
}