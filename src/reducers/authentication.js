/**
 * Created by alextulenko on 11/10/16.
 */
import { AUTH_USER, SIGN_OUT_USER, AUTH_ERROR , UPDATE_USER_SETTINGS} from '../actions';

import { browserHistory } from 'react-router';
const initialState =  {
    authenticated: false,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGN_IN_USER':
            return Object.assign({}, state, {
                authenticated: true
            })
        case 'SIGN_OUT_USER':
            return Object.assign({}, state, {
                authenticated: false
            })
        case AUTH_USER:
            return Object.assign({}, state, {
                authenticated: true,
                error: null,
                userInfo: action.payload
            })
        case AUTH_ERROR:
            return Object.assign({}, state, {
                error: action.payload.message
            })
        default:
            return state;
    }
}
