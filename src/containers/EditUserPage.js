/**
 * Created by alextulenko on 12/7/16.
 */
import React,{PropTypes} from 'react';
import ActiveOrders from './ActiveOrders';
import CurrentListings from './CurrentListings';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { browserHistory,hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
//import Phone, { phoneNumberFormat, isValidPhoneNumber } from 'react-phone-number-input'
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var FormControl = ReactBootstrap.FormControl;
import Geosuggest from 'react-geosuggest';
import Radium from 'radium'
import '../style/geosuggest.css';

var styles = {
    body: {
        width: '100%',
    },
    warning: {
        color: 'red'
    }

};
class EditUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phoneNumber: "", phoneNumberError: "", ownerNameError: "", ownerName: "", businessName: "", businessNameError: "", address: "",addressError: "", cords:null};
        this.updateEmail= this.updateEmail.bind(this);
        this.handleTextChange= this.handleTextChange.bind(this);
        this.handleOwnerNameChange= this.handleOwnerNameChange.bind(this);
        this.updateOwnerName= this.updateOwnerName.bind(this);
        this.handleBusinessNameChange= this.handleBusinessNameChange.bind(this);
        this.updateBusinessName= this.updateBusinessName.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
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

            if(!this.props.userInfo.isAccountFinished)
            {
                if(this.props.userInfo.businessName && this.props.userInfo.address)
                {
                    this.props.actions.unlockAccount();
                }
            }
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

            if(!this.props.userInfo.isAccountFinished)
            {
                if(this.props.userInfo.ownerName && this.props.userInfo.address)
                {
                    this.props.actions.unlockAccount();
                }
            }
        }
        else {
            this.setState({
                businessNameError: "Phone enter a business name"
            });
        }
    }
    updateAddress() {
        if(this.state.address.length > 0)
        {
            this.props.actions.updateUserSetting("address",this.state.address);
            this.props.actions.updateUserSetting("cords",this.state.cords);

            if(!this.props.userInfo.isAccountFinished)
            {
                if(this.props.userInfo.ownerName && this.props.userInfo.businessName)
                {
                    this.props.actions.unlockAccount();
                }
            }
        }
        else {
            this.setState({
                addressError: "Phone enter a business name"
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
    onSuggestSelect(suggest) {
        console.log(suggest);
        this.setState({
            address: suggest.label
        });
        this.setState({
            cords: [suggest.location.lat, suggest.location.lng]
        });
    }

    render() {
        var fixtures = [
            {label: 'Raleigh', location: {lat: 35.7796, lng: 78.6382}},
        ];
        var nameWarning;
        var addressWarning;
        var businessNameWarning;
        if(!this.props.userInfo.businessName) {
            businessNameWarning = <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                Please enter a business name to complete your account.
            </div>;
        }
        if (!this.props.userInfo.address) {
            addressWarning = <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                Please enter an address to complete your account.
            </div>;
        }
        if (!this.props.userInfo.ownerName) {
            nameWarning = <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                Please enter an owner name to complete your account.
            </div>;
        }

        return (
            <div className="container">
                <h1>Editable Settings:</h1>
                <Grid>
                    <Panel>
                        <h3>Phone Number</h3>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Phone Number:</p></Col>
                            <Col md={6}>{this.props.userInfo.phoneNumber}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Phone Number: </p></Col>
                            <Col md={6}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateEmail()} >Save</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.phoneNumberError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Owner Name</h3>
                        <h4 style={styles.warning}>{nameWarning}</h4>
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
                            <Col md={6}><Button onClick={() => this.updateOwnerName()} >Save</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.ownerNameError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Business Name</h3>
                        <h4 style={styles.warning}>{businessNameWarning}</h4>
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
                            <Col md={6}><Button onClick={() => this.updateBusinessName()} >Save</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.businessNameError}</p></Col>
                        </Row>
                    </Panel>
                    <Panel>
                        <h3>Address</h3>
                        <h4 style={styles.warning}>{addressWarning}</h4>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Current Address:</p></Col>
                            <Col md={6}>{this.props.userInfo.address}</Col>
                        </Row>
                        <Row>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>Input New Address: </p></Col>
                            <Col md={6}>
                                <Geosuggest style={{width: '100%'}}
                                            onSuggestSelect={this.onSuggestSelect}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}><Button onClick={() => this.updateAddress()} >Save</Button></Col>
                            <Col md={6}><p style={{fontWeight: 'bold', color: '#ff0000'}}>{this.state.addressError}</p></Col>
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

EditUserPage = Radium(EditUserPage);
export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);