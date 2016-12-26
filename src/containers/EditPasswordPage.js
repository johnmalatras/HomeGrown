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
import { browserHistory } from 'react-router';

var canEdit = true;
class EditPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newPassword: "",confirmPassword: "", oldPassword: '', passwordError: ''};
        this.updatePassword = this.updatePassword.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleConfirmNewPasswordChange = this.handleConfirmNewPasswordChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.leavePasswordChange = this.leavePasswordChange.bind(this);

    }
    renderAuthenticationError() {
        if (this.props.passwordEditError) {
            return <div className="alert alert-danger">{ this.props.passwordEditError }</div>;
        }
        return <div></div>;
    }
    updatePassword() {
        if(!(this.state.newPassword===this.state.confirmPassword))
        {
            this.setState({
                passwordError: "New passwords do not match"
            });
        }
        else if(!(this.state.newPassword.length>6))
        {
            this.setState({
                passwordError: "Password must be at least 7 characters long"
            });
        }else if(!(this.state.oldPassword.length>0))
        {
            this.setState({
                passwordError: "Please enter your old password"
            });
        }
        else
        {
            this.setState({
                passwordError: " "
            });
            canEdit = false;
           this.props.actions.updateUserPassword(this.props.userInfo.email,this.state.newPassword,this.state.oldPassword);
        }
    }

    handleNewPasswordChange(newEmail)
    {
        this.setState({
            newPassword: newEmail.target.value
        });
    }
    handleConfirmNewPasswordChange(newEmail)
    {
        this.setState({
            confirmPassword: newEmail.target.value
        });
    }
    handlePasswordChange(newPass)
    {
        this.setState({
            oldPassword: newPass.target.value
        });
    }
    leavePasswordChange(){
        this.props.actions.resetPasswordUpdate();
        browserHistory.push('/account');
    }
    render() {
        if(this.props.passwordChanged)
        {
            this.leavePasswordChange();
        }
        return (
            <div className="container">
                <h1>Edit Password:</h1>
                { this.renderAuthenticationError() }
                <Grid>
                    <Panel>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Password: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="password"
                                    value={this.state.newPassword}
                                    placeholder="Enter New Password"
                                    onChange={this.handleNewPasswordChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Confirm New Password: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="password"
                                    value={this.state.confirmPassword}
                                    placeholder="Enter New Password"
                                    onChange={this.handleConfirmNewPasswordChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <p> </p>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input Old Password: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="password"
                                    value={this.state.oldPassword}
                                    placeholder="Enter Old Password"
                                    onChange={this.handlePasswordChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updatePassword()} >Edit Password</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.passwordError}</p></Col>
                        </Row>
                    </Panel>
                </Grid>
                <h4>Password Requirements:</h4>
                <p>1. Password must be at least 7 characters long</p>
                <p>2. Password must contain at least one upper case and one lower case letter</p>
                <p>3. Password must contain at least one number</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.AuthReducer.userInfo,
        passwordEditError: state.AccountReducer.passwordEditError,
        passwordChanged: state.AccountReducer.passwordChanged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordPage);