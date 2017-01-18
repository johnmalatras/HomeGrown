/**
 * Created by alextulenko on 1/18/17.
 */
import React,{PropTypes} from 'react';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
import ForgotPasswordModal from './ForgotPasswordModal';
import { Field, reduxForm } from 'redux-form';
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Col = ReactBootstrap.Col;
var Form = ReactBootstrap.Form;
var Checkbox = ReactBootstrap.Checkbox;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Row = ReactBootstrap.Row;
var Grid = ReactBootstrap.Grid;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;
var Image = ReactBootstrap.Image;
var Clearfix = ReactBootstrap.Clearfix;
var Panel = ReactBootstrap.Panel;

import Radium, { Style } from 'radium'

var styles = {
    base: {
        background: '#E3D4B6',
        backgroundSize: 'cover',
        minHeight: '90.5vh',
    },
    form: {
        background: '#white',
    },
    header: {
        textAlign: 'center'
    },
    layout: {
        fontSize: '115%',
        textAlign: 'center'
    }
};
// const validate = (values) => {
//     const errors = {};
//
//     if (!values.email) {
//         errors.email = "Please enter an email.";
//
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//
//     if (!values.password) {
//         errors.password = "Please enter a password.";
//     }
//
//     return errors;
// };
const validate = (values) => {
    const errors = {};
    if (!values.email1) {
        errors.email1 = "Please enter an email.";

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email1 = 'Invalid email address'
    }

    if (!values.password1) {
        errors.password1 = "Please enter a password.";
    }

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

    if(!values.businessName){
        errors.businessName = "Please enter Business Name";
    }

    if(!values.address){
        errors.address = "Please enter Address";
    }

    if(!values.city){
        errors.city = "Please enter City";
    }
    if(!values.state){
        errors.state = "Please enter State";
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Please enter Phone Number";
    }
    if(!values.ownerName){
        errors.ownerName = "Please enter Contact Name";
    }
    if(values.accessCode!='123456'){
        errors.accessCode = "Incorrect Access Code";
    }

    return errors;
};
class LoginComponent extends React.Component {
    constructor(props) {
        super();
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
        this.handleFormSubmitSignUp = this.handleFormSubmitSignUp.bind(this);
        this.flipSelected = this.flipSelected.bind(this);
        this.renderAuthenticationError = this.renderAuthenticationError.bind(this);
    };

    flipSelected(){
        this.props.switchLogin(!this.props.isSignIn);
    };

    handleFormSubmit(values){
        {this.props.onLogin(values)}
    };

    handleFormSubmitSignUp(values){
        if(values.isRestaurant == undefined)
        {
            values.isRestaurant = true;
        }
        {this.props.onSignUp(values)}
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
        var SignInUp;
        if (this.props.isSignIn) {
            SignInUp =
                <Panel className="col-md-6">
                    <div>
                        <h1 style={styles.header}>Sign In</h1>
                        { this.renderAuthenticationError() }
                        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                            <Field name="email1" type="text" component={this.renderField} label="Email"/>
                            <Field name="password1" type="password" component={this.renderField} label="Password"/>
                            <button action="submit" className="btn btn-primary">Sign In</button>
                        </form>
                        <a style={styles.layout} onClick={() => this.flipSelected()}>New to RipeNow? Click here to create an account.</a>
                        <br/>
                        <br />
                        <a style={styles.layout} href="#" onClick={ () => this.props.openModal() }>Forgot Password?</a>
                    </div>

                    <ForgotPasswordModal show={this.props.modalIsOpen}
                                         forgotPassword={ (email) => this.props.forgotPassword(email) }
                                         onHide={  () => this.props.closeModal()  }/>
                </Panel>
        }
        else {
            SignInUp =
                <Panel className="col-md-6">
                    <div>
                        <h1 style={styles.header}>Sign Up</h1>
                        { this.renderAuthenticationError() }
                        <form onSubmit={this.props.handleSubmit(this.handleFormSubmitSignUp)}>
                            <Field name="email" type="text" component={this.renderField} label="Email"/>
                            <Field name="password" type="password" component={this.renderField} label="Password"/>
                            <Field name="passwordConfirmation" type="password" component={this.renderField}
                                   label="Password Confirmation"/>
                            <Field name="phoneNumber" type="text" component={this.renderField}
                                   label="Business Contact Phone Number"/>
                            <fieldset className="form-group">
                                <label>Select Restaurant or Farm</label>
                                <div>
                                    <Field name="isRestaurant" component="select">
                                        <option value={true}>Restaurant</option>
                                        <option value={false}>Farm</option>
                                    </Field>
                                </div>
                            </fieldset>
                            <Field name="agrees" type="checkbox" component={this.renderField}
                                   label="I have read and agreed to the terms of service."/>
                            <button action="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    <a  style={styles.layout} onClick={() => this.flipSelected()}>Already have an account? Click here to Login.</a>
                </Panel>
        }
        return (
            <div>
                {SignInUp}
            </div>
        );
    }
}
LoginComponent.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    authenticationError: PropTypes.string,
    modalIsOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    forgotPassword: PropTypes.func.isRequired
};
LoginComponent = Radium(LoginComponent);
export default(reduxForm({
    form: 'loginPage',
    validate
})(LoginComponent));
//export default LoginComponent;
