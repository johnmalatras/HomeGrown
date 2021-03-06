/**
 * Created by alextulenko on 11/12/16.
 */
import { SWITCH_LOGIN } from '../actions';
const initialState = {
    signIn: true
};
export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGN_UP_USER':
            return Object.assign({}, state, {
                authenticated: true
            })
        case SWITCH_LOGIN:
            return Object.assign({}, state, {
                signIn: action.payload
            })
        default:
            return state;
    }
}