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
import Radium, { Style } from 'radium';

var styles = {
    button: {
        background: '#8DC63F',
        color: 'white',
        borderColor: '#8DC63F',
        fontSize: '125%',
        padding: '6px 12px 6px 12px'
    },
}
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
        var addItemButton;
        if(this.props.userInfo.isAccountFinished)
        {
            addItemButton = <Button style={styles.button}  onClick={() => this.addItem()} >Add Item</Button>;
        }
        if (isRestaurant === 'false') {
            currentListingsElement =
                <div>
                    <Panel>
                        <CurrentListings />
                        {addItemButton}
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


        var needInfoLabel;
        if(!this.props.userInfo.isAccountFinished)
        {
            needInfoLabel =
                <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    {" "}Please fill out your business name and address in "Edit Business Settings" below.
                </div>;
        }
        return (
            <div className="container">
                <h1>Account Overview</h1>
                {needInfoLabel}
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

AccountPage = Radium(AccountPage);
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
