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

    return errors;
};

class Login extends React.Component {
    constructor(props) {
        super();
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
    };

    handleFormSubmit(values){
        {this.props.onLogin(values)}
    };
    renderAuthenticationError() {
        if (this.props.authenticationError) {
            return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
        }
        return <div></div>;
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
                        <button action="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    authenticationError: PropTypes.string
};

export default(reduxForm({
     form: 'loginPage',
    validate
 })(Login));


