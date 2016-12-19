/**
 * Created by alextulenko on 12/18/16.
 */
import React,{PropTypes} from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var FormControl = ReactBootstrap.FormControl;

class EditEmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newEmail: "",confirmNewEmail: "", password: '', emailError: ''};
        this.updateEmail = this.updateEmail.bind(this);
        this.handleNewEmailChange = this.handleNewEmailChange.bind(this);
        this.handleConfirmNewEmailChange = this.handleConfirmNewEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }
    renderAuthenticationError() {
        if (this.props.emailEditError) {
            return <div className="alert alert-danger">{ this.props.emailEditError }</div>;
        }
        return <div></div>;
    }
    updateEmail() {
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.newEmail))
        {
            this.setState({
                emailError: "Please enter a valid email format"
            });
        }
        else if(!(this.state.newEmail===this.state.confirmNewEmail))
        {
            this.setState({
                emailError: "New emails do not match"
            });
        }
        else if(!(this.state.password.length>0))
        {
            this.setState({
                emailError: "Please enter a password"
            });
        }
        else
        {
            this.setState({
                emailError: " "
            });
            this.props.actions.updateUserEmail(this.props.userInfo.email,this.state.newEmail,this.state.password);
        }
    }

    handleNewEmailChange(newEmail)
    {
        this.setState({
            newEmail: newEmail.target.value
        });
    }
    handleConfirmNewEmailChange(newEmail)
    {
        this.setState({
            confirmNewEmail: newEmail.target.value
        });
    }
    handlePasswordChange(newPass)
    {
        this.setState({
            password: newPass.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Edit Email:</h1>
                { this.renderAuthenticationError() }
                <Grid>
                    <Panel>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Email Address:</p></Col>
                            <Col md={6}>{this.props.userInfo.email}</Col>
                        </Row>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Email Address: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="text"
                                    value={this.state.newEmail}
                                    placeholder="Enter New Email"
                                    onChange={this.handleNewEmailChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Confirm New Email Address: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="text"
                                    value={this.state.confirmNewEmail}
                                    placeholder="Enter New Email"
                                    onChange={this.handleConfirmNewEmailChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input Password: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Enter Password"
                                    onChange={this.handlePasswordChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateEmail()} >Edit Email Address</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.emailError}</p></Col>
                        </Row>
                    </Panel>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.AuthReducer.userInfo,
        emailEditError: state.AccountReducer.emailEditError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEmailPage);