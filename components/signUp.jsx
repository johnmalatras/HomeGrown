/**
 * Created by wic on 10/22/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');
var {connect} = require('react-redux')
var {reduxForm} = require('redux-form')


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

function FieldGroup({ id, label, help, props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

var SignUp = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    },

    fieldGroup: function(){
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type={props.type} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },
    render: function () {
        return(
            <div>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Sign In">
                    <div>
                        <h1>Sign In</h1>
                        <form>
                            <FieldGroup
                                id="formControlsEmail"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                            />
                            <FieldGroup
                                id="formControlsPassword"
                                label="Password"
                                type="password"
                            />
                            <Button>Submit</Button>
                        </form>
                    </div>
                </Tab>
                <Tab eventKey={2} title="Sign Up">
                    <div>
                        <h1>Sign Up</h1>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Select Username"
                                />
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    placeholder="Select Password"
                                />
                                <ControlLabel>Confirm Password</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Confirm Password"
                                />
                                <ControlLabel>Farm Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter Farm Name"
                                />
                                <ControlLabel>Location</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter Farm Name"
                                />
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Email"
                                />
                                <ControlLabel>Phone Number</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Phone Number"
                                />
                                <ControlLabel>Bussiness Type(Farm or Resturant):</ControlLabel>
                                <select>
                                    <option value="A">Farm</option>
                                    <option value="B">Resturant</option>
                                </select>

                                <Button>Submit</Button>
                            </FormGroup>
                        </form>
                    </div>
                </Tab>
            </Tabs>
            </div>
        );
    }
});
module.exports = SignUp;