/**
 * Created by alextulenko on 1/18/17.
 */
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';
import {signUpUser,signInUser, openForgotPasswordModal, closeForgotPasswordModal, forgotPassword,switchLogin} from '../actions/index';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        authenticated: state.AuthReducer.authenticated,
        authenticationError: state.AuthReducer.error,
        modalIsOpen: state.forgotpassword.fpModalIsOpen,
        isSignIn: state.loginReducer.signIn
    }
}

const mapDispatchToProps =  ({
    onSignUp: signUpUser,
    onLogin: signInUser,
    openModal: openForgotPasswordModal,
    closeModal: closeForgotPasswordModal,
    forgotPassword: forgotPassword,
    switchLogin: switchLogin
})

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default SignUpContainer