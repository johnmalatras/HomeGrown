/**
 * Created by alextulenko on 11/10/16.
 */
import { hashHistory } from 'react-router';

export const signInUser = (username, password) => {
    hashHistory.push('/holder');
    return {
        type: 'SIGN_IN_USER'
    }
}

export const signUpUser = (username, password, email, business, address1, address2, phone) =>{
    //Sign Up Call
    return {
        type: 'SIGN_UP_USER'
    }
}

export const signOutUser = () => {

    return {
        type: 'SIGN_OUT_USER'

    }
}
