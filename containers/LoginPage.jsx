/**
 * Created by alextulenko on 11/1/16.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';



class LoginPage extends React.Component {
    handleFormSubmit(values){
        //console.log(values);
        this.props.signInUser(values);
    };

    render() {
        return(
            <div className="container">
                <div className="col-md-6">
                    <h2 className="text-center">Log In</h2>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <fieldset className="form-group">
                            <label>Email</label>
                            <Field name="email" component="input" className="form-control" type="text" placeholder="Email"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Password</label>
                            <Field name="password" component="input" className="form-control" type="password" placeholder="Password"/>
                        </fieldset>

                        <button action="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(null, Actions)(reduxForm({
    form: 'login',
})(LoginPage));
//export default reduxForm({ form: 'login'})(LoginPage);