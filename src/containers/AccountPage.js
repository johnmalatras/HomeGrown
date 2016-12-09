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
var editingName = false;

class AccountPage extends React.Component {
    constructor(props) {
        super();
        this.addItem= this.addItem.bind(this);
        this.editInfo= this.editInfo.bind(this);
    }
    addItem(){
        browserHistory.push('/addItem');
    }
    editInfo(value, previousValue) {
        if(editingName == false)
        {
            editingName = true;
        }
        else{
            editingName = false;
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
                    <Button style={{background: '#8DC63F', color: '#000000'}} onClick={() => this.addItem()} >Add Item</Button>
                </div>
        }
        var nameElement;
        if(editingName == false)
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
                <h3>Account Information</h3>
                <Grid>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Owner Name:</h4></Col>
                    </Row>
                    <Row>
                        <Col md={6}>{nameElement}</Col>
                        <Col md={6}><Button onClick={() => this.editInfo('ownerName',this.props.userInfo.ownerName)} >Edit Owner Name</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Bussiness Name:</h4></Col>
                    </Row>
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.bussinessName}</p></Col>
                        <Col md={6}><Button onClick={() => this.editInfo('bussinessName',this.props.userInfo.bussinessName)} >Edit Business Name</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Address:</h4></Col>
                    </Row>
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state} </p></Col>
                        <Col md={6}><Button onClick={() => this.editInfo('address',this.props.userInfo.address)} >Edit Address</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><h4 style={{fontWeight: 'bold'}}>Phone Number:</h4></Col>
                    </Row>
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.phoneNumber}</p></Col>
                        <Col md={6}><Button onClick={() => this.editInfo('phoneNumber',this.props.userInfo.phoneNumber)} >Edit Phone Number</Button></Col>
                    </Row>
                </Grid>
                <ActiveOrders />
                {currentListingsElement}
            </div>
        )

    }
}

function mapStateToProps(state) {
  return {
    items: state.activeOrders.items,
    userInfo: state.AuthReducer.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);