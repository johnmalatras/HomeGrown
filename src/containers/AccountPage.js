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
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

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
    editInfo(selectedKey) {
        console.log(selectedKey);
        browserHistory.push('/edit');
    }


    render() {
        const isRestaurant = this.props.userInfo.isRestaurant;
        var dateLabel = 'Delivery Date';
        var currentListingsElement;
        if (isRestaurant === 'false') {
            currentListingsElement =
                <div>
                    <Panel>
                        <CurrentListings />
                        <Button bsStyle="primary"  onClick={() => this.addItem()} >Add Item</Button>
                    </Panel>
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
                <h1>Account Overview For {this.props.userInfo.businessName}</h1>
                {currentListingsElement}
                <Panel>
                    <ActiveOrders />
                </Panel>
                <Panel>
                    <Grid>
                        <Row>
                            <Col md={2}><h3 style={{fontWeight: 'bold'}}>Settings:</h3></Col>
                        </Row>
                        <Row>
                            <Col md={3}><p style={{fontWeight: 'bold'}}>Owner Name:</p></Col>
                            <Col md={3}><p style={{fontWeight: 'bold'}}>Business Name:</p></Col>
                            <Col md={3}><p style={{fontWeight: 'bold'}}>Address:</p></Col>
                            <Col md={3}><p style={{fontWeight: 'bold'}}>Phone Number:</p></Col>
                        </Row>
                        <Row>
                            <Col md={3}><p>{this.props.userInfo.ownerName}</p></Col>
                            <Col md={3}><p>{this.props.userInfo.businessName}</p></Col>
                            <Col md={3}><p>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state}</p></Col>
                            <Col md={3}><p>{this.props.userInfo.phoneNumber}</p></Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Nav bsStyle="pills" activeKey={1} onSelect={(value) => this.editInfo(value)}>
                                    <NavItem eventKey={1} href="/home">Edit Settings</NavItem>
                                </Nav>
                            </Col>
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

// <Row>
//     <Col md={4}><h4 style={{fontWeight: 'bold'}}>Owner Name:</h4></Col>
//     <Col md={4}><h4 style={{fontWeight: 'bold'}}>{this.props.userInfo.ownerName}</h4></Col>
//     <Col md={4}><Button  onClick={() => this.addItem()} >Edit</Button></Col>
// </Row>
// <Row>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>Business Name:</h4></Col>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>{this.props.userInfo.businessName}</h4></Col>
// </Row>
// <Row>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>Address:</h4></Col>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state} </h4></Col>
// </Row>
// <Row>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>Phone Number:</h4></Col>
// <Col md={6}><h4 style={{fontWeight: 'bold'}}>{this.props.userInfo.phoneNumber}</h4></Col>
// </Row>