import { OPEN_AO_MODAL, CLOSE_AO_MODAL } from '../actions';

const initialState =  {
  aoSelectedItem: null,
  aoModalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_AO_MODAL:
      return Object.assign({}, state, {
        aoModalIsOpen: true,
        aoSelectedItem: action.item.selectedItem
      });
    case CLOSE_AO_MODAL:
      return Object.assign({}, state, {
        aoModalIsOpen: false,
        aoSelectedItem: null
      });
    default:
      return state;
  }
}