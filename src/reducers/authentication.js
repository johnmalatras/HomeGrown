/**
 * Created by alextulenko on 11/10/16.
 */
const initialState =  {
    authenticated: false
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
        default:
            return state;
    }
}
