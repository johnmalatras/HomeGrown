/**
 * Created by alextulenko on 11/12/16.
 */
export default function signUpReducer(state = [], action) {
    switch (action.type) {
        case 'SIGN_UP_USER':
            return Object.assign({}, state, {
                authenticated: true
            })
        default:
            return state;
    }
}