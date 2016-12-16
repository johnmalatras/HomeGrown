import React from 'react';
import ActiveOrders from './ActiveOrders';
import CurrentListings from './CurrentListings';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;

var editingName = false;
var nameElement;
class AccountPage extends React.Component {
    constructor(props) {
        super();
        this.addItem= this.addItem.bind(this);
        this.editInfo= this.editInfo.bind(this);
    }
    addItem(){
        browserHistory.push('/addItem');
    }
    editInfo() {
        this.props.actions.updateAccountPage();
    }
    renderName(){
        return [
            <div> </div>
        ]
        if(this.props.isEditing == false)
        {
            return[
                <Grid>
                    <Row>
                        <Col md={6}><h3>Account Information</h3></Col>
                        <Col md={6}><Button onClick={() => this.editInfo('phoneNumber',this.props.userInfo.phoneNumber)} >Edit User Info</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Owner Name:</h4></Col>
                        <Col md={6}>{nameElement}</Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Bussiness Name:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.bussinessName}</p></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Address:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state} </p></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Phone Number:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.phoneNumber}</p></Col>
                    </Row>
                </Grid>
                ]
        }
        else{
            return[
                <Grid>
                    <Row>
                        <Col md={6}><h3>Account Information</h3></Col>
                        <Col md={6}><Button onClick={() => this.editInfo()} >Save User Info</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Owner Name:</h4></Col>
                        <Col md={6}>{nameElement}</Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Bussiness Name:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.bussinessName}</p></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Address:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state} </p></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Phone Number:</h4></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.phoneNumber}</p></Col>
                    </Row>
                </Grid>
            ]
        }
    }

    render() {
        const isRestaurant = this.props.userInfo.isRestaurant;
        var dateLabel = 'Delivery Date';
        var currentListingsElement;
        if (isRestaurant === 'false') {
            currentListingsElement =
                <div>
                    <CurrentListings />
                    <Button  onClick={() => this.addItem()} >Add Item</Button>
                </div>
        }
        var nameElement;
        if(this.props.isEditing == false)
        {
            nameElement =
                <div>
                    <p style={{fontWeight: 'bold'}}>{this.props.userInfo.ownerName}</p>
                </div>
        }else {
            nameElement =
                <div>
                    <p style={{fontWeight: 'bold'}}>Editing</p>
                </div>
        }
        return (
            <div>
                <h1>Account Overview</h1>
                {currentListingsElement}
                <ActiveOrders />
                {this.renderName()}
                <Panel>
                    <h4>User Settings</h4>
                    <Grid>
                        <Row>
                            <Col md={6}><h4 style={{fontWeight: 'bold'}}>Owner Name:</h4></Col>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.ownerName}</p></Col>
                        </Row>
                        <Row>
                            <Col md={6}><h4 style={{fontWeight: 'bold'}}>Business Name:</h4></Col>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.businessName}</p></Col>
                        </Row>
                        <Row>
                            <Col md={6}><h4 style={{fontWeight: 'bold'}}>Address:</h4></Col>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state} </p></Col>
                        </Row>
                        <Row>
                            <Col md={6}><h4 style={{fontWeight: 'bold'}}>Phone Number:</h4></Col>
                            <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.phoneNumber}</p></Col>
                        </Row>
                    </Grid>
                </Panel>
            </div>
        )

    }
}

function mapStateToProps(state) {
  return {
    items: state.activeOrders.items,
    userInfo: state.AuthReducer.userInfo,
    isEditing: state.AccountReducer.editingUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);