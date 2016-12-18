/**
 * Created by alextulenko on 11/19/16.
 */
import { UPDATE_ACCOUNT_PAGE,UPDATE_USER_INFO } from '../actions';

const initialState =  {
    editingUser: false,
    editingParameter: ''
};

export default function account(state = initialState, action) {
    switch(action.type) {
        case UPDATE_ACCOUNT_PAGE:
            return Object.assign({}, state, {
                editingParameter: true
            });
        case UPDATE_USER_INFO:
            return{

            };
        default:
            return state;
    }
}