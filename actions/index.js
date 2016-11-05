/**
 * Created by alextulenko on 10/28/16.
 */
import request from 'superagent';
import { browserHistory } from 'react-router';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export function signInUser()
{
    browserHistory.push('/market');
    console.log("ANY");

    return {
        type: SIGN_IN_USER
    }
}


export function signOutUser()
{
    browserHistory.push('/');

    return {
        type: SIGN_OUT_USER
    }
}