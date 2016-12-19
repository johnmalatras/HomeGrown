/**
 * Created by alextulenko on 11/19/16.
 */
import { UPDATE_ACCOUNT_PAGE,UPDATE_USER_INFO, UPDATE_EMAIL_ERROR } from '../actions';

const initialState =  {
    editingUser: false,
    editingParameter: '',
    emailEditError: ''
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
        case UPDATE_EMAIL_ERROR:
            console.log(action.payload);
            return Object.assign({}, state, {
                emailEditError: action.payload
            });
        default:
            return state;
    }
}