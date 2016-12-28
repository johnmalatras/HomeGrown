/**
 * Created by alextulenko on 12/7/16.
 */
import React,{PropTypes} from 'react';
import ActiveOrders from './ActiveOrders';
import CurrentListings from './CurrentListings';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
//import Phone, { phoneNumberFormat, isValidPhoneNumber } from 'react-phone-number-input'
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var FormControl = ReactBootstrap.FormControl;

class EditUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phoneNumber: "", phoneNumberError: "", ownerNameError: "", ownerName: "", businessName: "", businessNameError: ""};
        this.updateEmail= this.updateEmail.bind(this);
        this.handleTextChange= this.handleTextChange.bind(this);
        this.handleOwnerNameChange= this.handleOwnerNameChange.bind(this);
        this.updateOwnerName= this.updateOwnerName.bind(this);
        this.handleBusinessNameChange= this.handleBusinessNameChange.bind(this);
        this.updateBusinessName= this.updateBusinessName.bind(this);

    }
    updateEmail() {
        if(this.state.phoneNumber.length == 12)
        {
            this.props.actions.updateUserSetting("phoneNumber",this.state.phoneNumber);
        }
        else
        {
            this.setState({
                phoneNumberError: "Phone number must be 10 numbers long"
            });
        }
    }
    updateOwnerName(){
        if(this.state.ownerName.length > 0)
        {
            this.props.actions.updateUserSetting("ownerName",this.state.ownerName);
        }
        else {
            this.setState({
                ownerNameError: "Phone enter a owner name"
            });
        }
    }
    updateBusinessName(){
        if(this.state.businessName.length > 0)
        {
            this.props.actions.updateUserSetting("businessName",this.state.businessName);
        }
        else {
            this.setState({
                businessNameError: "Phone enter a business name"
            });
        }
    }
    handleOwnerNameChange(newName)
    {
        this.setState({
            ownerName: newName.target.value
        });
    }
    handleBusinessNameChange(newName)
    {
        this.setState({
            businessName: newName.target.value
        });
    }
    handleTextChange(textComment)
    {
        this.setState({
            phoneNumber: textComment.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Editable Settings:</h1>
                <Grid>
                    <Panel>
                        <h3>Phone Number</h3>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Phone Number:</p></Col>
                            <Col md={6}>{this.props.userInfo.phoneNumber.substring(2)}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Phone Number: </p></Col>
                            <Col md={6}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateEmail()} >Edit Phone Number</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.phoneNumberError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Owner Name</h3>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Owner Name:</p></Col>
                            <Col md={6}>{this.props.userInfo.ownerName}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Owner Name: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="text"
                                    value={this.state.ownerName}
                                    placeholder="Enter Owner Name"
                                    onChange={this.handleOwnerNameChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateOwnerName()} >Edit Owner Name</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.ownerNameError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Business Name</h3>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Business Name:</p></Col>
                            <Col md={6}>{this.props.userInfo.businessName}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Business Name: </p></Col>
                            <Col md={6}>
                                <FormControl
                                    type="text"
                                    value={this.state.businessName}
                                    placeholder="Enter Business Name"
                                    onChange={this.handleBusinessNameChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateBusinessName()} >Edit Business Name</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.businessNameError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Address</h3>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Address:</p></Col>
                            <Col md={6}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>To update your address please call: 919-830-9521</p></Col>
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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);