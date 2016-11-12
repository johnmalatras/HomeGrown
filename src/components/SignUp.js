/**
 * Created by alextulenko on 11/11/16.
 */
import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {
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