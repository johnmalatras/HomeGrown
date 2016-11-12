/**
 * Created by alextulenko on 11/10/16.
 */
export const signInUser = (username, password) => {
    return {
        type: 'SIGN_IN_USER'
    }
}

export const signOutUser = () => {

    return {
        type: 'SIGN_OUT_USER'

    }
}
