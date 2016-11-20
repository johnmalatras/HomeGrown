import { OPEN_EDIT_MODAL, CLOSE_MODAL, UPDATE } from '../actions';

const initialState =  {
    selectedItem: null,
    modalIsOpen: false
};

export default function editModal(state = initialState, action) {
    switch(action.type) {
        case OPEN_EDIT_MODAL:
            return Object.assign({}, state, {
                modalIsOpen: true,
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                modalIsOpen: false,
            });
        case UPDATE:
            console.log("Hit update modal reducer");
            return Object.assign({}, state, {
                //modalIsOpen: true
                //selectedItem: action.item.selectedItem UNCOMMENT OUT LATER
            });
        default:
            return state;
    }
}