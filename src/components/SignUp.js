/**
 * Created by alextulenko on 11/11/16.
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

    if(!values.bussinessName){
        errors.bussinessName = "Please enter Bussiness Name";
    }

    if(!values.addressLineOne){
        errors.addressLineOne = "Please enter Address";
    }

    if(!values.addressLineTwo){
        errors.addressLineTwo = "Please enter Address";
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Please enter Bussiness Name";
    }

    return errors;
};

class SignUp extends React.Component {
    constructor(props) {
        super();
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
    }

    renderAuthenticationError() {
        if (this.props.authenticationError) {
            return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
        }
        return <div></div>;
    }

    handleFormSubmit(values){
        //console.log(values)
        {this.props.onSignUp(values)}
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
                <div className="col-md-6">
                    { this.renderAuthenticationError() }
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field name="email" type="text" component={this.renderField} label="Email" />
                        <Field name="password" type="password" component={this.renderField} label="Password" />
                        <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />
                        <Field name="bussinessName" type="text" component={this.renderField} label="Bussiness Name" />
                        <Field name="addressLineOne" type="text" component={this.renderField} label="Address Line 1" />
                        <Field name="addressLineTwo" type="text" component={this.renderField} label="Address Line 2" />
                        <Field name="phoneNumber" type="text" component={this.renderField} label="Phone Number" />

                        <button action="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onSignUp: PropTypes.func.isRequired,
    authenticationError: PropTypes.string
}

export default(reduxForm({
    form: 'signUpPage',
    validate
})(SignUp));