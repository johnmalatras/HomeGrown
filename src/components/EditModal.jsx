import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { Field, reduxForm } from 'redux-form';
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Col = ReactBootstrap.Col;

const EditModal = (props) => {
    var Modal = ReactBootstrap.Modal;
    console.log(props);
    return (
        <Modal show={ props.show } onHide={ () => props.onHide() } value={ props.value } onSubmit={ () => props.onSubmit(value)}>
            <div className="container">
                <form>
                    <h3>Edit Information:</h3>
                    <h4>Current Username: {props.user.username}</h4>
                    <h4>New Username:  </h4><input name="username" value={props.value} /*onChange={this.handleChange}*/  type="text" label="Username" />
                    <br />
                    <ButtonToolbar>
                        <Button onClick={() => props.onSubmit(props.value)}>Save</Button>
                        <Button onClick={() => props.onHide()}>Close</Button>
                    </ButtonToolbar>
                    <br />
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;