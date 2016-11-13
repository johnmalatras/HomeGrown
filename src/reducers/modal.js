import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState =  {
  selectedItem: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: true,
        selectedItem: action.item.selectedItem
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: false,
        selectedItem: null
      });
    default:
      return state;
  }
}