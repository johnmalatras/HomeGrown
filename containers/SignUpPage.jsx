/**
 * Created by alextulenko on 11/1/16.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const validate = values => {
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

class SignUpPage extends React.Component {

    handleFormSubmit(values){
        this.props.signInUser(values);
    };

    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <h2 className="text-center">Sign Up</h2>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <fieldset className="form-group">
                            <label>Email:</label>
                            <Field name="email" component="input" className="form-control" type="text"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Password:</label>
                            <Field name="password" component="input" className="form-control" type="password"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Confirm Password:</label>
                            <Field name="confirmPassword" component="input" className="form-control" type="password"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Business Name:</label>
                            <Field name="bussinessName" component="input" className="form-control" type="text"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Address:</label>
                            <Field name="addressLineOne" component="input" className="form-control" text="text"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Phone Number:</label>
                            <Field name="phoneNumber" component="input" className="form-control" text="text"/>
                        </fieldset>

                        <button action="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, Actions)(reduxForm({
    form: 'signup'

})(SignUpPage));