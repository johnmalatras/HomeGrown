/**
 * Created by alextulenko on 1/18/17.
 */
import { SWITCH_LOGIN } from '../actions';
const initialState = {
    signIn: true
};
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_LOGIN:
            return Object.assign({}, state, {
                signIn: action.payload
            })
        default:
            return state;
    }
}