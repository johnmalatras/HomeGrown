/**
 * Created by alextulenko on 11/10/16.
 */
import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../actions/index';
import { Field, reduxForm } from 'redux-form';

const Login = ({ onLogin, authenticated }) => {
    return (
        <div>
            <h2 className="text-center">Is Logged in: {'' + authenticated}</h2>
            <button type="submit"
                    onClick={() => onLogin()}>
                LOGIN BUTTON
            </button>
        </div>
    )
}
// const Login = ({ onLogin, authenticated }) => {
//     return (
//         <div className="container">
//             <div className="col-md-6">
//                 <h2 className="text-center">Log In</h2>
//                     <form onSubmit={() => onLogin()}>
//                         <fieldset className="form-group">
//                             <label>Email</label>
//                             <Field name="email" component="input" className="form-control" type="text" placeholder="Email"/>
//                         </fieldset>
//                         <fieldset className="form-group">
//                             <label>Password</label>
//                             <Field name="password" component="input" className="form-control" type="password" placeholder="Password"/>
//                         </fieldset>
//                         <button action="submit" className="btn btn-primary">Sign In</button>
//                     </form>
//                 <h2 className="text-center">Is Logged in: {'' + authenticated}</h2>
//             </div>
//         </div>
//     )
// }
Login.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

//export default Login
export default reduxForm({
    form: 'login',
})(Login);