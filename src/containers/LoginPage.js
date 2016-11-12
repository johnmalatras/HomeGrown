/**
 * Created by alextulenko on 11/11/16.
 */
import { connect } from 'react-redux'
import {signInUser} from '../actions/index';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        authenticated: state.AuthReducer.authenticated,
        authenticationError: state.AuthReducer.error
    }
}

const mapDispatchToProps =  ({
    onLogin: signInUser
})

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginPage