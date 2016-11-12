/**
 * Created by alextulenko on 11/10/16.
 */
import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Please enter an email.";

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = "Please enter a password.";
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = "Please enter a password confirmation.";
    }

    if (values.password !== values.passwordConfirmation ) {
        errors.password = 'Passwords do not match';
    }

    return errors;
};

class Login extends React.Component {
    constructor(props) {
        super();
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(values){
        {this.props.onLogin(values.email,values.password)}
    };

    renderField({input, label, type, meta: {touched, error}}){
        return(
            <fieldset className="form-group">
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} className="form-control" type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </fieldset>
        )
    };

    render() {

        return(
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                    <Field name="email" type="text" component={this.renderField} label="Email" />
                    <Field name="password" type="password" component={this.renderField} label="Password" />
                    <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />


                    <button action="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

//export default reduxForm({ form: 'login'})(Login);
//() => this.props.onLogin()

export default(reduxForm({
     form: 'loginPage',
    validate
 })(Login));


// <h2 className="text-center">Is Logged in: {'' + this.props.authenticated}</h2>
// <button type="submit"
//         onClick={this.handleFormSubmit()}>
//     LOGIN BUTTON
// </button>

