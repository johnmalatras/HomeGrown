/**
 * Created by alextulenko on 11/18/16.
 */
import { ADD_ITEM,OPEN_MODAL_ACCOUNT,CLOSE_MODAL_ACCOUNT } from '../actions';

const initialState = {
};

export default function addItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {
            });
        case OPEN_MODAL_ACCOUNT:
            return Object.assign({}, state, {
                modalIsOpen: true,
                selectedItem: action.item.selectedItem
            });
        case CLOSE_MODAL_ACCOUNT:
            return Object.assign({}, state, {
                modalIsOpen: false,
                selectedItem: null
            });
        default:
            return state;
    }
}