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
        if(selectedKey == 1)
        {
            browserHistory.push('/edit');
        }
        else if(selectedKey == 2)
        {
            browserHistory.push('/email');
        }
        else if(selectedKey == 3)
        {
            browserHistory.push('/password');
        }
        else if(selectedKey == 4)
        {
            browserHistory.push('/available');
        }

    }


    render() {
        const isRestaurant = this.props.userInfo.isRestaurant;
        var dateLabel = 'Delivery Date';
        var currentListingsElement;
        var editSettingsElement;
        if (isRestaurant === 'false') {
            currentListingsElement =
                <div>
                    <Panel>
                        <CurrentListings />
                        <Button bsStyle="primary"  onClick={() => this.addItem()} >Add Item</Button>
                    </Panel>
                </div>;

            editSettingsElement =
                <Grid>
                    <Row>
                        <Col md={2}><h3 style={{fontWeight: 'bold'}}>Settings:</h3></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Nav bsStyle="pills" onSelect={(value) => this.editInfo(value)}>
                                <NavItem eventKey={1} href="/home">Edit Business Settings</NavItem>
                                <NavItem eventKey={2} href="/email">Edit Email</NavItem>
                                <NavItem eventKey={3} href="/password">Edit Password</NavItem>
                                <NavItem eventKey={4} href="/dates">Edit Available Selling Dates</NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>
        }
        else
        {
            editSettingsElement =
                <Grid>
                    <Row>
                        <Col md={2}><h3 style={{fontWeight: 'bold'}}>Settings:</h3></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Nav bsStyle="pills" onSelect={(value) => this.editInfo(value)}>
                                <NavItem eventKey={1} href="/home">Edit Business Settings</NavItem>
                                <NavItem eventKey={2} href="/email">Edit Email</NavItem>
                                <NavItem eventKey={3} href="/password">Edit Password</NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>
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
            <div className="container">
                <h1>Account Overview For {this.props.userInfo.businessName}</h1>
                {currentListingsElement}
                <Panel>
                    <ActiveOrders />
                </Panel>
                <Panel>
                    {editSettingsElement}
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

//USE THIS ONE IF YOU WANT IT BACK
// <Row>
//     <Col md={3}><p style={{fontWeight: 'bold'}}>Owner Name:</p></Col>
//     <Col md={3}><p style={{fontWeight: 'bold'}}>Business Name:</p></Col>
//     <Col md={3}><p style={{fontWeight: 'bold'}}>Address:</p></Col>
//     <Col md={3}><p style={{fontWeight: 'bold'}}>Phone Number:</p></Col>
// </Row>
// <Row>
// <Col md={3}><p>{this.props.userInfo.ownerName}</p></Col>
// <Col md={3}><p>{this.props.userInfo.businessName}</p></Col>
// <Col md={3}><p>{this.props.userInfo.address}, {this.props.userInfo.city}, {this.props.userInfo.state}</p></Col>
// <Col md={3}><p>{this.props.userInfo.phoneNumber}</p></Col>
// </Row>