/**
 * Created by alextulenko on 11/19/16.
 */
import { UPDATE_ACCOUNT_PAGE,UPDATE_USER_INFO, UPDATE_EMAIL_ERROR, UPDATE_PASSWORD_ERROR,UPDATE_PASSWORD_SUCCESSFUL,RESET_PASSWORD_UPDATE } from '../actions';

const initialState =  {
    editingUser: false,
    editingParameter: '',
    emailEditError: '',
    passwordEditError: '',
    passwordChanged: false
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
        case UPDATE_PASSWORD_SUCCESSFUL:
            return Object.assign({}, state, {
                passwordChanged: true,
                passwordEditError: ''
            });
        case UPDATE_EMAIL_ERROR:
            return Object.assign({}, state, {
                emailEditError: action.payload
            });
        case UPDATE_PASSWORD_ERROR:
            return Object.assign({}, state, {
                passwordEditError: action.payload
            });
        case RESET_PASSWORD_UPDATE:
            return Object.assign({}, state, {
                passwordChanged: false,
                passwordEditError: ''
            });
        default:
            return state;
    }
}