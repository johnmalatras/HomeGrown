/**
 * Created by alextulenko on 11/12/16.
 */
import { connect } from 'react-redux'
import {signUpUser} from '../actions/index';
import SignUp from '../components/SignUp';

const mapStateToProps = (state) => {
    return {
        authenticated: state.AuthReducer.authenticated,
        authenticationError: state.AuthReducer.error
    }
}

const mapDispatchToProps =  ({
    onSignUp: signUpUser
})

const SignUpPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default SignUpPage