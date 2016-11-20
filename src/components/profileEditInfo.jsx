import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateInfo } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
var ReactBootstrap = require('react-bootstrap');
//import { Field, reduxForm } from 'redux-form';
//import { connect } from 'react-redux';
const { DOM: { input, select, textarea } } = React;


var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Col = ReactBootstrap.Col;
var Form = ReactBootstrap.Form;
var Table = ReactBootstrap.Table;


class CurrentInfo extends React.Component {

    /*constructor(props) {
        super();
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(values){
        console.log("Hit HandleFormSubmit");
        //{this.props.onUpdate(values.username, values.business, values.email, values.phone, values.address)}
        //console.log(values);
        //console.log("Printed values")
        //{this.props.onUpdateUser(values)}
        this.props.onUpdateUser();
    }

    /*renderField({input, label, type, valueinput, meta: {touched, error}}){
        return(
            <fieldset className="form-group">
                <label>{label}</label>
                <div>
                    <input {...input} value={valueinput} placeholder={label} className="form-control" type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </fieldset>
        )
    };*/

    render () {
        //console.log(this.props);
        return (
            <div>
                <h3>Edit Information Here:</h3>
                <Table responsive >
                    <tr>
                        <th>Information</th>
                        <th>Edit</th>
                      </tr>
                    <tbody>
                    <tr>
                        <td>Username: </td>
                        <td>
                            <Button type="submit" onClick={this.props.onUpdateUser}>Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Business Name: </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default (reduxForm({
    form: 'CurrentInfo'
}))(CurrentInfo);


/*
 <div>
 <h4>Account Information is Updated: {""+this.props.updated}</h4>
 <div class="container">
 <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>

 <Field name="username" type="text"  component={this.renderField} label="Username" />
 <Field name="business" type="text"  component={this.renderField} label="Business" />
 <Field name="email" type="text"  component={this.renderField} label="E-Mail" />
 <Field name="phone" type="text"  component={this.renderField} label="Phone" />
 <Field name="address" type="text"  component={this.renderField} label="Address" />

 <button action="submit" className="btn btn-primary">Edit Information</button>
 </form>
 </div>
 </div>
 */

/*
 <h4>Account Information is Updated: {""+this.props.updated}</h4>
 <Form horizontal onSubmit={console.log()}>
 <FormGroup controlId="formHorizontalUsername">
 <Col componentClass={ControlLabel} sm={2}>
 Username
 </Col>
 <Col sm={10}>
 <FormControl controlId="testControl" defaultValue={this.props.user.username} readonly="true" />
 </Col>
 </FormGroup>

 <FormGroup controlId="formHorizontalBusinessName">
 <Col componentClass={ControlLabel} sm={2}>
 Business Name
 </Col>
 <Col sm={10}>
 <FormControl type="text"  defaultValue={this.props.user.business}/>
 </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail">
 <Col componentClass={ControlLabel} sm={2}>
 E-Mail
 </Col>
 <Col sm={10}>
 <FormControl type="email" defaultValue={this.props.user.email} />
 </Col>
 </FormGroup>

 <FormGroup controlId="formHorizontalPhoneNumber">
 <Col componentClass={ControlLabel} sm={2}>
 Phone Number
 </Col>
 <Col sm={10}>
 <FormControl type="text" defaultValue={this.props.user.phone} />
 </Col>
 </FormGroup>

 <FormGroup controlId="formHorizontalAddress">
 <Col componentClass={ControlLabel} sm={2}>
 Address
 </Col>
 <Col sm={10}>
 <FormControl type="address" defaultValue={this.props.user.address} />
 </Col>
 </FormGroup>
 <FormGroup>
 <Col smOffset={2} sm={10}>
 <ButtonToolbar>
 <Button type="submit" onClick={this.handleFormSubmit()} controlId="updateButton">
 Edit Information
 </Button>
 <Button type="submit" controlId="editButton">
 Send Reset Password Email
 </Button>
 </ButtonToolbar>
 </Col>
 </FormGroup>
 </Form>
 */