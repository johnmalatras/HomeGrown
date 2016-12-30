/**
 * Created by alextulenko on 11/11/16.
 */
import { connect } from 'react-redux'
import {signInUser, openForgotPasswordModal, closeForgotPasswordModal, forgotPassword} from '../actions/index';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        authenticated: state.AuthReducer.authenticated,
        authenticationError: state.AuthReducer.error,
        modalIsOpen: state.forgotpassword.fpModalIsOpen
    }
}

const mapDispatchToProps =  ({
    onLogin: signInUser,
    openModal: openForgotPasswordModal,
    closeModal: closeForgotPasswordModal,
    forgotPassword: forgotPassword
})

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginPage