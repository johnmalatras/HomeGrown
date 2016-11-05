/**
 * Created by alextulenko on 10/28/16.
 */
import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions';

const initialState =  {
    authenticated: false
};
//CHANGED ...state to state - double check
export default function gifs(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case SIGN_IN_USER:
            return {
                 state, authenticated: true

            };
        case SIGN_OUT_USER:
            return {
                state, authenticated: false
            };
        default:
            return state;
    }
}